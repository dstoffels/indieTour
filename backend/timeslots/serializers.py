from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from .models import Timeslot, TimeslotType


class TimeslotTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeslotType
        exclude = ["user"]


class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeslot
        exclude = ["date"]

    type_id = serializers.IntegerField(write_only=True)
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

    types = serializers.SerializerMethodField()
    date_id = serializers.CharField(source="date.id")

    def get_types(self, timeslot):
        types = TimeslotType.objects.all()
        return TimeslotTypeSerializer(types, many=True).data
