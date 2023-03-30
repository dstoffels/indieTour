from django.db import models
from tours.models import Tour
from uuid_model import  UUIDModel

class Date(UUIDModel):
    date = models.DateField()
    place_id = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    notes = models.TextField(blank=True)
    deal = models.TextField(blank=True)
    title = models.CharField(max_length=255, blank=True)
    is_show_day = models.BooleanField(default=False)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='tourdates')

    def __str__(self):
        return f"{self.date} - {self.title}"
