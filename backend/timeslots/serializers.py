from rest_framework import serializers
from .models import Timeslot
from gapi.models import Place


class TimeslotSerializer(serializers.ModelSerializer):
    type_options = serializers.SerializerMethodField()

    def get_type_options(self, timeslot):
        return Timeslot.TYPES

    class Meta:
        model = Timeslot
        exclude = ["date"]
        depth = 1

    def create_timeslot(self, req, date_id):
        self.is_valid(raise_exception=True)
        self.save(date_id=date_id)

    def update_timeslot(self, req):
        self.is_valid(raise_exception=True)
        self.save()

    def is_valid(self, *, raise_exception=True):
        return super().is_valid(raise_exception=raise_exception)

    def update(self, instance, validated_data):
        if "start_location" in self.initial_data:
            place_data = self.initial_data.pop("start_location")
            place = Place.get_or_create(place_data)
            validated_data["start_location"] = place
        if "end_location" in self.initial_data:
            place_data = self.initial_data.pop("end_location")
            place = Place.get_or_create(place_data)
            validated_data["end_location"] = place
        return super().update(instance, validated_data)
