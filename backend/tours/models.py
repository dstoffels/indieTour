from django.db.models import (
    CASCADE,
    ForeignKey,
    CharField,
    TextField,
    ManyToManyField,
    BooleanField,
)
from bands.models import Band, BandUser
from authentication.models import User
from uuid_model import UUIDModel


class Tour(UUIDModel):
    name = CharField(max_length=255, error_messages={"unique": "Name must be unique."})
    band = ForeignKey(Band, on_delete=CASCADE)
    notes = TextField(blank=True, default="")
    users = ManyToManyField(to="TourUser", related_name="tour_users")
    is_archived = BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.name} ({self.band.name})"


class TourUser(UUIDModel):
    banduser = ForeignKey(BandUser, on_delete=CASCADE)
    tour = ForeignKey(Tour, on_delete=CASCADE)

    def __str__(self) -> str:
        return f"{self.banduser.user.email} ({self.tour.name})"
