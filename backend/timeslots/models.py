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


class TimeslotType(Model):
    name = CharField(max_length=255, unique=True)
    user = ForeignKey(User, on_delete=CASCADE, null=True, blank=True, related_name="user_timeslot_types")

    def __str__(self) -> str:
        return self.name


class Timeslot(UUIDModel):
    date = ForeignKey(Date, on_delete=DO_NOTHING, related_name="schedule")
    description = TextField(default="", blank=True)
    start_time = TimeField()
    end_time = TimeField(null=True, blank=True)
    start_location = TextField(default="", blank=True)
    end_location = TextField(default="", blank=True)
    type = ForeignKey(TimeslotType, on_delete=DO_NOTHING, null=True)
    after_midnight = BooleanField(default=False)
