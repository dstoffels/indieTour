from rest_framework import serializers
from .models import Place
from contacts.serializers import PlaceContactSerializer, PlaceContact


class PlaceSerializer(serializers.Serializer):
    contacts = serializers.SerializerMethodField()

    def get_contacts(self, place):
        place_contacts = PlaceContact.objects.filter(place=place)
        return PlaceContactSerializer(place_contacts, many=True).data

    class Meta:
        model = Place
        fields = "__all__"

    @staticmethod
    def create_or_update(data):
        place_id = data.get("place_id")
        name = data.get("name")
        formatted_address = data.get("formatted_address")
        location = data.get("geometry").get("location")
        lat = location.get("lat")
        lng = location.get("lng")
        address_components = data.get("address_components")
        types = ["locality", "administrative_area_level_1", "country"]
        political_location = []

        for component in address_components:
            if any(type in component["types"] for type in types):
                political_location.append(component["short_name"])
        data = {
            "place_id": place_id,
            "name": name,
            "formatted_address": formatted_address,
            "lat": lat,
            "lng": lng,
            "political_address": ", ".join(political_location),
        }
        print(data)
        location, create = Place.objects.get_or_create(data)
        return location
