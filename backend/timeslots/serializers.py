from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from .models import Timeslot, TimeslotType

class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeslot
        fields = ['id', 'description', 'start_time', 'end_time', 'start_location', 'end_location', 'type', 'after_midnight']


    type = serializers.SerializerMethodField()
    def get_type(self, timeslot):
        return timeslot.type.name if timeslot.type else None
    
    def create_timeslot(self, req, date_id):
        self.is_valid(raise_exception=True)
        self.save(date_id=date_id)
        return Response(self.data, status=status.HTTP_201_CREATED)

    def update_timeslot(self, req):
       self.is_valid(raise_exception=True)
       self.save()
       return Response(self.data, status=status.HTTP_200_OK)
