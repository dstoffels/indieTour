import uuid
from django.db.models import (
    CASCADE,
    Model,
    ForeignKey,
    CharField,
    TextField,
    ManyToManyField,
    DateField,
    BooleanField,
    TimeField,
    UUIDField,
)
from bands.models import Band, BandUser
from authentication.models import User
from uuid_model import UUIDModel

# Create your models here.
class Tour(UUIDModel):
    name = CharField(max_length=255, error_messages={"unique": "Name must be unique."})
    band = ForeignKey(Band, on_delete=CASCADE)
    notes = TextField(blank=True, default="")
    users = ManyToManyField("bands.banduser", through="TourUser")
    is_archived = BooleanField(default=False)


class TourUser(UUIDModel):
    banduser = ForeignKey(BandUser, on_delete=CASCADE)
    tour = ForeignKey(Tour, on_delete=CASCADE)
