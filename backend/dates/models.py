from django.db import models
from tours.models import Tour
from uuid_model import UUIDModel


class Date(UUIDModel):
    date = models.DateField()
    place_id = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    notes = models.TextField(blank=True)
    deal = models.TextField(blank=True)
    title = models.CharField(max_length=255, blank=True)
    is_show_day = models.BooleanField(default=False)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name="tourdates")
    prospects = models.ManyToManyField(
        "Prospect",
        related_name="dates",
        blank=True,
    )

    def __str__(self):
        return f"{self.date} - {self.tour.name}"


class StatusType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Prospect(UUIDModel):
    notes = models.TextField(blank=True)
    status = models.ForeignKey(StatusType, on_delete=models.PROTECT)
    date = models.ForeignKey(Date, on_delete=models.CASCADE)
    venue = models.ForeignKey("venues.Venue", on_delete=models.CASCADE)


class LogEntry(UUIDModel):
    prospect = models.ForeignKey(Prospect, on_delete=models.CASCADE, related_name="log_entries")
    date = models.DateField()
    note = models.TextField(blank=True)
