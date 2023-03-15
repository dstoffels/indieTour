from rest_framework import serializers
from bands.band_user_serializer import BandUserSerializer, BandUser
from tours.models import Tour
from authentication.serializers import UserSerializer, User
from dates.serializers import DateSerializer
from dates.models import Date
from rest_framework import status
from rest_framework.response import Response

class TourUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BandUser
        fields = ['id', 'user', "is_admin"]

class TourSerializer(serializers.ModelSerializer):
    dates = DateSerializer(many=True, required=False, read_only=True, source='date_set')
    users = BandUserSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = ['id', 'name', 'notes', 'is_archived', 'users', 'dates']
        depth = 1

    def has_valid_name(self, band_id):
        band_tours = Tour.objects.filter(band_id=band_id, name=self.validated_data['name'])
        band_tours = band_tours.exclude(id=self.instance.id) if self.instance else band_tours
        return bool(not len(band_tours))

    def create_tour(self, req, band_id):
        self.is_valid(raise_exception=True)
        if self.has_valid_name(band_id):
            self.save(band_id=band_id)
            
            # create and/or update bandusers
            band_users = BandUserSerializer.create_or_update(req.data['users'], self.instance.band_id)
            # create tour users
            for band_user in band_users:
                self.instance.users.add(band_user)

            DateSerializer.create_or_update(req.data['dates'], self.instance.id)

            return Response(self.data, status=status.HTTP_201_CREATED)
        return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)

    
    def update_tour(self, req):
        self.is_valid(raise_exception=True)

        band_users = BandUserSerializer.create_or_update(req.data['users'], self.instance.band_id)
        self.instance.users.clear()
        for band_user in band_users:
            self.instance.users.add(band_user)

        DateSerializer.create_or_update(req.data['dates'], self.instance.id)
        self.save()
        return Response(self.data, status=status.HTTP_200_OK)

