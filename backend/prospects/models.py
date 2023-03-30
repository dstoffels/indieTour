from django.db import models
from uuid_model import UUIDModel


class StatusType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Prospect(UUIDModel):
    notes = models.TextField(blank=True)
    status = models.ForeignKey(StatusType, on_delete=models.PROTECT)
    date = models.ForeignKey("dates.Date", on_delete=models.CASCADE)
    venue = models.ForeignKey("venues.Venue", on_delete=models.CASCADE)


class LogEntry(UUIDModel):
    prospect = models.ForeignKey(Prospect, on_delete=models.CASCADE, related_name="log_entries")
    date = models.DateField()
    note = models.TextField(blank=True)
