from django.db import models
from uuid_model import UUIDModel


class Prospect(UUIDModel):
    STATUS_CHOICES = [
        ("UNCONFIRMED", "UNCONFIRMED"),
        ("INQUIRY SENT", "INQUIRY SENT"),
        ("HOLD", "HOLD"),
        ("UNAVAILABLE", "UNAVAILABLE"),
        ("OFFER RECEIVED", "OFFER RECEIVED"),
        ("CONFIRMED", "CONFIRMED"),
    ]

    notes = models.TextField(blank=True)
    status = models.CharField(choices=STATUS_CHOICES, default=STATUS_CHOICES[0][0], max_length=50)
    hold = models.IntegerField(default=1)
    date = models.ForeignKey("dates.Date", on_delete=models.CASCADE)
    venue = models.ForeignKey("venues.Venue", on_delete=models.CASCADE)


class LogEntry(UUIDModel):
    prospect = models.ForeignKey(Prospect, on_delete=models.CASCADE, related_name="log_entries")
    timestamp = models.DateTimeField()
    note = models.TextField(blank=True)
