from rest_framework import serializers
from .models import Date
from rest_framework import status
from rest_framework.response import Response
from timeslots.serializers import TimeslotSerializer
from gapi.serializers import Place, PlaceSerializer


class DateSerializer(serializers.ModelSerializer):
    # @staticmethod
    # def create_or_update(req, tour_id):
    #     location = PlaceSerializer.create_or_update(req.data.get("location"))
    #     req.data["location"] = location
    #     date, created = Date.objects.get_or_create(req.data, tour_id=tour_id)
    #     return date

    timeslots = serializers.SerializerMethodField()
    timeslots_after_midnight = serializers.SerializerMethodField()

    def get_timeslots(self, date):
        return TimeslotSerializer(
            date.schedule.filter(start_after_midnight=False).order_by("start_time"), many=True
        ).data

    def get_timeslots_after_midnight(self, date):
        return TimeslotSerializer(
            date.schedule.filter(start_after_midnight=True).order_by("start_time"), many=True
        ).data

    tour_id = serializers.CharField(source="tour.id", read_only=True)
    band_id = serializers.CharField(source="tour.band.id", read_only=True)

    class Meta:
        model = Date
        exclude = ["tour"]
        depth = 1

    def is_valid_tour_date(self, tour_id):
        tour_dates = Date.objects.filter(tour_id=tour_id, date=self.validated_data["date"])
        tour = tour_dates.exclude(id=self.instance.id) if self.instance else tour_dates
        return bool(not len(tour_dates))

    # def create_date(self, req, tour_id):
    #     self.is_valid(raise_exception=True)
    #     if self.is_valid_tour_date(tour_id):
    #         self.save(tour_id=tour_id)

    #         # create timeslots

    #         return Response(self.data, status=status.HTTP_201_CREATED)
    #     return Response({"date": "Cannot have duplicate tour dates in a tour."}, status=status.HTTP_400_BAD_REQUEST)

    # def update_date(self, req):
    #     self.is_valid(raise_exception=True)
    #     self.save()
    #     return Response(self.data, status=status.HTTP_200_OK)

    def create(self, validated_data):
        if "place" in self.initial_data:
            place_data = self.initial_data.pop("place")
            place = Place.get_or_create(place_data)
            validated_data["place"] = place
            validated_data["title"] = place.name
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if "place" in self.initial_data:
            place_data = self.initial_data.pop("place")
            place = Place.get_or_create(place_data)
            validated_data["place"] = place
        return super().update(instance, validated_data)
