from django.db import models
from uuid_model import UUIDModel
from dates.models import Date
from authentication.models import User


class Contact(UUIDModel):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="contacts")

    def __str__(self):
        return self.name


class ContactMethod(UUIDModel):
    METHODS = [
        ("Phone", "Phone"),
        ("Email", "Email"),
        ("Facebook", "Facebook"),
        ("Instagram", "Instagram"),
        ("WhatsApp", "WhatsApp"),
        ("Twitter", "Twitter"),
        ("Other", "Other"),
    ]

    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name="methods")
    method = models.CharField(max_length=25, choices=METHODS)
    value = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.contact} - {self.method}: {self.value}"


class DateContact(UUIDModel):
    date = models.ForeignKey("dates.Date", on_delete=models.CASCADE)
    contact = models.ForeignKey("contacts.Contact", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.date} - {self.contact}"


class PlaceContact(UUIDModel):
    place = models.ForeignKey("gapi.Place", on_delete=models.CASCADE)
    contact = models.ForeignKey("contacts.Contact", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.place} - {self.contact}"
