from django.db.models import (
    CASCADE,
    DO_NOTHING,
    TextField,
    TimeField,
    CharField,
    ForeignKey,
    Model,
    ManyToManyField,
    BooleanField,
    UUIDField,
)
from dates.models import Date
from uuid_model import UUIDModel


class TimeslotType(Model):
    name = CharField(max_length=255, unique=True)


class Timeslot(UUIDModel):
    date = ForeignKey(Date, on_delete=DO_NOTHING, related_name="schedule")
    description = TextField(default="", blank=True)
    start_time = TimeField()
    end_time = TimeField(null=True, blank=True)
    start_location = TextField(default="", blank=True)
    end_location = TextField(default="", blank=True)
    type = ForeignKey(TimeslotType, on_delete=DO_NOTHING, null=True, blank=True)
    after_midnight = BooleanField(default=False)
