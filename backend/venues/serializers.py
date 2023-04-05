from rest_framework import serializers
from .models import Venue


class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ["id", "name", "place_id", "formatted_address", "lat", "lng"]

    def __str__(self) -> str:
        return self.instance.name
