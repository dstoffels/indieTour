from rest_framework import serializers
from bands.band_user_serializer import BandUserSerializer, BandUser
from tours.models import Tour, TourUser
from authentication.serializers import UserSerializer, User
from dates.serializers import DateSerializer
from dates.models import Date
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class TourUserSerializer(serializers.ModelSerializer):
    banduser_id = serializers.CharField(source="banduser.id")
    user_id = serializers.CharField(source="banduser.user.id")
    email = serializers.CharField(source="banduser.user.email")
    username = serializers.CharField(source="banduser.user.username")
    is_admin = serializers.BooleanField(source="banduser.is_admin")

    class Meta:
        model = TourUser
        fields = ("id", "banduser_id", "user_id", "email", "username", "is_admin")

    @staticmethod
    def create_or_update(req, tour_id):
        tour = get_object_or_404(Tour, id=tour_id)
        banduser = BandUserSerializer.create_or_update(req, tour.band.id)
        print(banduser.user.email)

        touruser, created = TourUser.objects.get_or_create(banduser=banduser, tour=tour)
        touruser.save()
        return touruser


class TourSerializer(serializers.ModelSerializer):
    band_id = serializers.CharField(source="band.id", read_only=True)
    users = serializers.SerializerMethodField()

    def get_users(self, tour):
        tourusers = TourUser.objects.filter(tour=tour)
        ser = TourUserSerializer(tourusers, many=True)
        return ser.data

    class Meta:
        model = Tour
        exclude = ["band"]

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
            try:
                self.instance.id
                res_status = status.HTTP_200_OK
            except:
                res_status = status.HTTP_201_CREATED
            self.save(band_id=band_id)

            req.user.active_tour = self.instance
            req.user.save()

            return Response(self.data, res_status)
        return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)

    def update_tour(self, req, band_id):
        self.is_valid(raise_exception=True)
        if self.has_valid_name(band_id):
            self.save()
            return Response(self.data, status=status.HTTP_200_OK)
        return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)
