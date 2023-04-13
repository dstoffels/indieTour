from rest_framework import serializers
from .models import Place


class PlaceSerializer(serializers.Serializer):
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

    class Meta:
        model = Place
        fields = "__all__"


# class PlaceSerializer:
#     def __init__(self, data):
#         self.place_id = data.get("place_id")
#         self.name = data.get("name")
#         self.formatted_address = data.get("formatted_address")

#         location = data.get("geometry").get("location")
#         self.lat = location.get("lat")
#         self.lng = location.get("lng")

#         self.data = {
#             "place_id": self.place_id,
#             "name": self.name,
#             "formatted_address": self.formatted_address,
#             "lat": self.lat,
#             "lng": self.lng,
#         }
