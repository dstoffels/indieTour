from rest_framework import serializers
from authentication.models import User
from tours.models import Tour
from dates.serializers import DateSerializer
from dates.models import Date
from rest_framework import status
from rest_framework.response import Response

class TourSerializer(serializers.ModelSerializer):
    dates = DateSerializer(many=True, required=False, read_only=True, source='date_set')

    class Meta:
        model = Tour
        fields = ['id', 'name', 'notes', 'is_archived', 'dates']

    def create_tour(self, req, band_id):
        self.is_valid(raise_exception=True)
        self.save(band_id=band_id)
        return Response(self.data, status=status.HTTP_201_CREATED)
    
    def update_tour(self, req):
        self.is_valid(raise_exception=True)
        # need to update dates (date serializer method, init_dates?)
        self.save()
        return Response(self.data, status=status.HTTP_200_OK)

