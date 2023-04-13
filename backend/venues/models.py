from django.db import models
from uuid_model import UUIDModel
from authentication.models import User
from gapi.models import Place


class Venue(UUIDModel):
    name = models.CharField(max_length=255)
    location = models.ForeignKey(Place, on_delete=models.DO_NOTHING)
    place_id = models.CharField(max_length=255)
    formatted_address = models.TextField()
    lat = models.DecimalField(max_digits=13, decimal_places=10, default=0)
    lng = models.DecimalField(max_digits=13, decimal_places=10, default=0)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name="venues")

    def __str__(self):
        return self.name
