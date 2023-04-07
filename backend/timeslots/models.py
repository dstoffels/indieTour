from django.db.models import (
    CASCADE,
    TextField,
    TimeField,
    CharField,
    ForeignKey,
    BooleanField,
)
from dates.models import Date
from authentication.models import User
from uuid_model import UUIDModel


class Timeslot(UUIDModel):
    TYPES = [
        "Event",
        "Travel",
        "Flight",
        "Meeting",
    ]

    date = ForeignKey(Date, on_delete=CASCADE, related_name="schedule")
    description = TextField(default="", blank=True)
    details = TextField(default="", blank=True)
    start_time = TimeField(blank=True, null=True)
    start_after_midnight = BooleanField(default=False)
    end_time = TimeField(null=True, blank=True)
    end_after_midnight = BooleanField(default=False)
    start_location = TextField(default="", blank=True)
    end_location = TextField(default="", blank=True)
    type = CharField(max_length=25, choices=[(choice, choice) for choice in TYPES], blank=True, default=TYPES[0])
