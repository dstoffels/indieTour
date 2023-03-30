from rest_framework import serializers
from .models import Date
from rest_framework import status
from rest_framework.response import Response
from timeslots.serializers import TimeslotSerializer
from venues.serializers import VenueSerializer
from .models import Prospect, LogEntry


class DateSerializer(serializers.ModelSerializer):
    @staticmethod
    def create_or_update(dates, tour_id):
        for date_data in dates:
            date, created = Date.objects.get_or_create(tour_id=tour_id, date=date_data["date"])
            date.save(*date_data)

    timeslots = serializers.SerializerMethodField()

    def get_timeslots(self, date):
        return TimeslotSerializer(date.schedule.all().order_by("start_time"), many=True).data

    class Meta:
        model = Date
        fields = ["id", "date", "location", "title", "notes", "is_show_day", "timeslots", "place_id"]

    def is_valid_tour_date(self, tour_id):
        tour_dates = Date.objects.filter(tour_id=tour_id, date=self.validated_data["date"])
        tour = tour_dates.exclude(id=self.instance.id) if self.instance else tour_dates
        return bool(not len(tour_dates))

    def create_date(self, req, tour_id):
        self.is_valid(raise_exception=True)
        if self.is_valid_tour_date(tour_id):
            self.save(tour_id=tour_id)

            # create timeslots

            return Response(self.data, status=status.HTTP_201_CREATED)
        return Response({"date": "Cannot have duplicate tour dates in a tour."}, status=status.HTTP_400_BAD_REQUEST)

    def update_date(self, req):
        self.is_valid(raise_exception=True)
        self.save()
        return Response(self.data, status=status.HTTP_200_OK)


class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = "__all__"


class ProspectSerializer(serializers.ModelSerializer):
    venue = VenueSerializer()
    log_entries = LogEntrySerializer(many=True)

    class Meta:
        model = Prospect
        fields = ("id", "venue", "date", "notes", "status", "log_entries")
