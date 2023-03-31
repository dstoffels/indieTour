from django.db import models
from uuid_model import UUIDModel
from authentication.models import User


class Venue(UUIDModel):
    name = models.CharField(max_length=255)
    place_id = models.CharField(max_length=255, blank=True)
    formatted_address = models.TextField(blank=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name="venues")

    def __str__(self):
        return self.name
