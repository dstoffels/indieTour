from rest_framework import serializers
from authentication.models import User
from bands.models import Band, BandUser
from tours.serializers import TourSerializer
from rest_framework import status
from rest_framework.response import Response
from authentication.serializers import UserSerializer
from .band_user_serializer import BandUserSerializer

# BAND SERIALIZER
class BandSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    users = serializers.SerializerMethodField()

    def get_users(self, band):
        bandusers = BandUser.objects.filter(band=band)
        ser = BandUserSerializer(bandusers, many=True)
        return ser.data

    class Meta:
        model = Band
        depth = 1
        fields = "__all__"

    def create_band(self, req):
        self.is_valid(raise_exception=True)
        self.save(owner=req.user)
        req.user.active_band_id = self.instance.id
        req.user.save()

        return Response(self.data, status=status.HTTP_201_CREATED)

    def update_band(self, req):
        self.is_valid(raise_exception=True)
        self.save()
        return Response(self.data, status=status.HTTP_200_OK)
