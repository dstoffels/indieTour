from rest_framework import serializers
from rest_framework.response import Response
from .models import Prospect, LogEntry
from gapi.serializers import PlaceSerializer, Place


class LogEntrySerializer(serializers.ModelSerializer):
    prospect_id = serializers.CharField(read_only=True)
    timestamp = serializers.DateTimeField(read_only=True)

    class Meta:
        model = LogEntry
        exclude = ["prospect"]


class ProspectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prospect
        exclude = ["date"]
        depth = 1

    log_entries = LogEntrySerializer(many=True, read_only=True)
    date_id = serializers.CharField(source="date.id", read_only=True)
    status_choices = serializers.SerializerMethodField()

    def get_status_choices(self, prospect):
        return map(lambda s: s[0], Prospect.STATUS_CHOICES)

    def create(self, validated_data):
        place = Place.get_or_create(self.initial_data)
        validated_data["venue_id"] = place.id
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if "place" in self.initial_data:
            place_data = self.initial_data.pop("place")
            place = Place.get_or_create(place_data)
            validated_data["venue_id"] = place.id
        return super().update(instance, validated_data)
