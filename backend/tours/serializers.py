from rest_framework import serializers
from bands.band_user_serializer import BandUserSerializer, BandUser
from tours.models import Tour, TourUser
from authentication.serializers import UserSerializer, User
from dates.serializers import DateSerializer
from dates.models import Date
from rest_framework import status
from rest_framework.response import Response


class TourUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourUser
        fields = "__all__"
        # fields = ['id', 'user', "is_admin"]


class TourSerializer(serializers.ModelSerializer):
    dates = serializers.SerializerMethodField()
    users = BandUserSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = ["id", "name", "notes", "is_archived", "users", "dates", "band_id"]
        depth = 1

    def has_valid_name(self, band_id):
        name = self.validated_data.get("name", False)
        if name:
            band_tours = Tour.objects.filter(band_id=band_id, name=name)
            band_tours = band_tours.exclude(id=self.instance.id) if self.instance else band_tours
            return bool(not len(band_tours))
        return True

    def create_or_update(self, req, band_id):
        self.is_valid(raise_exception=True)
        if self.has_valid_name(band_id):
            self.save(band_id=band_id)

            req.user.active_tour = self.instance
            req.user.save()

            return Response(self.data, status=status.HTTP_201_CREATED)
        return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)

    def update_tour(self, req, band_id):
        self.is_valid(raise_exception=True)
        if self.has_valid_name(band_id):
            self.save()
            return Response(self.data, status=status.HTTP_200_OK)
        return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)

    def get_dates(self, tour: Tour):
        dates = tour.tourdates.all().order_by("date")
        return DateSerializer(dates, many=True).data
