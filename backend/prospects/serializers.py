from rest_framework import serializers
from rest_framework.response import Response
from venues.serializers import VenueSerializer, Venue
from .models import Prospect, LogEntry
from gapi.serializers import PlaceSerializer


class LogEntrySerializer(serializers.ModelSerializer):
    prospect_id = serializers.CharField(read_only=True)

    class Meta:
        model = LogEntry
        exclude = ["prospect"]


class ProspectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prospect
        exclude = ["date"]

    venue = VenueSerializer()
    log_entries = LogEntrySerializer(many=True, read_only=True)
    date_id = serializers.CharField(source="date.id", read_only=True)
    status_choices = serializers.SerializerMethodField()

    def get_status_choices(self, prospect):
        return map(lambda s: s[0], Prospect.STATUS_CHOICES)

    @staticmethod
    def create_or_update(req, date_id):
        venue, created = Venue.objects.get_or_create(**PlaceSerializer(req.data).data, creator=req.user)

        prospect = Prospect.objects.create(date_id=date_id, venue=venue)

        ser = ProspectSerializer(prospect)
        return Response(ser.data)
