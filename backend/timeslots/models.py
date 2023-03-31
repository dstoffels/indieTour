from django.db.models import (
    CASCADE,
    DO_NOTHING,
    TextField,
    TimeField,
    CharField,
    ForeignKey,
    Model,
    BooleanField,
)
from dates.models import Date
from authentication.models import User
from uuid_model import UUIDModel


class Timeslot(UUIDModel):
    TYPES = [
        ("Event", "Event"),
        ("Drive", "Drive"),
        ("Flight", "Flight"),
        ("Meeting", "Meeting"),
    ]

    date = ForeignKey(Date, on_delete=DO_NOTHING, related_name="schedule")
    description = TextField(default="", blank=True)
    start_time = TimeField()
    end_time = TimeField(null=True, blank=True)
    start_location = TextField(default="", blank=True)
    end_location = TextField(default="", blank=True)
    type = CharField(max_length=25, choices=TYPES, blank=True)
    after_midnight = BooleanField(default=False)
