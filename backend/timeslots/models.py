from django.db import models
from dates.models import Date
from authentication.models import User
from uuid_model import UUIDModel
from gapi.models import Place


class Timeslot(UUIDModel):
    TYPES = [
        "Event",
        "Travel",
        "Flight",
        "Meeting",
    ]

    date = models.ForeignKey(Date, on_delete=models.CASCADE, related_name="schedule")
    description = models.TextField(default="", blank=True)
    details = models.TextField(default="", blank=True)
    start_time = models.TimeField(blank=True, null=True)
    start_after_midnight = models.BooleanField(default=False)
    end_time = models.TimeField(null=True, blank=True)
    end_after_midnight = models.BooleanField(default=False)
    start_location = models.ForeignKey(
        Place, on_delete=models.SET_NULL, null=True, blank=True, related_name="start_location"
    )
    end_location = models.ForeignKey(
        Place, on_delete=models.SET_NULL, null=True, blank=True, related_name="end_location"
    )
    type = models.CharField(max_length=25, choices=[(choice, choice) for choice in TYPES], blank=True, default=TYPES[0])
