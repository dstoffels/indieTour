from django.db import models
from uuid_model import UUIDModel


class Place(UUIDModel):
    place_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)
    formatted_address = models.TextField()
    political_address = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=13, decimal_places=10, default=0)
    lng = models.DecimalField(max_digits=13, decimal_places=10, default=0)

    @classmethod
    def get_or_create(cls, place_data):
        place_id = place_data.get("place_id")
        address_components = place_data.get("address_components")

        political_address = []
        locality = next((comp["short_name"] for comp in address_components if "locality" in comp["types"]), None)
        if locality:
            political_address.append(locality)

        admin_area = next(
            (comp["short_name"] for comp in address_components if "administrative_area_level_1" in comp["types"]), None
        )
        if admin_area:
            political_address.append(admin_area)

        country = next((comp["short_name"] for comp in address_components if "country" in comp["types"]), None)
        if country:
            political_address.append(country)

        political_address = ", ".join(political_address)

        place, created = cls.objects.get_or_create(place_id=place_id)
        place.formatted_address = place_data.get("formatted_address")
        place.name = place_data.get("name")
        place.lat = place_data.get("geometry", {}).get("location", {}).get("lat")
        place.lng = place_data.get("geometry", {}).get("location", {}).get("lng")
        place.description = place_data.get("description")
        place.political_address = political_address

        place.save()

        return place

    def __str__(self) -> str:
        return self.description
