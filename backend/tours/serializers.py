from rest_framework import serializers
from authentication.models import User
from tours.models import Tour
from dates.serializers import DateSerializer
from dates.models import Date
from rest_framework import status
from rest_framework.response import Response

class TourSerializer(serializers.ModelSerializer):
    dates = DateSerializer(many=True, required=False)

    class Meta:
        model = Tour
        fields = ['id']

    def create(self, validated_data):
        dates = validated_data.pop('dates')
        tour = Tour.objects.create(**validated_data)
        for date in dates:
            Date.objects.create(tour=tour, **date)
        return tour
    
    def update(self, instance: Tour, validated_data):
        self.dates.data