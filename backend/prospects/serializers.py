from rest_framework import serializers
from rest_framework.response import Response
from venues.serializers import VenueSerializer
from .models import Prospect, LogEntry


class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = "__all__"


class ProspectSerializer(serializers.ModelSerializer):
    venue = VenueSerializer()
    log_entries = LogEntrySerializer(many=True)

    class Meta:
        model = Prospect
        fields = ("id", "venue", "date", "notes", "status", "log_entries")
