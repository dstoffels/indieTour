from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from .models import Timeslot

class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeslot
        fields = ['id', 'date', 'description', 'start_time', 'end_time', 'start_location', 'end_location', 'type', 'after_midnight']

    type = serializers.SerializerMethodField()
    def get_type(self, timeslot):
        return timeslot.type.name