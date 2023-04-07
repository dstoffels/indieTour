# from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    active_band = models.ForeignKey("bands.Band", on_delete=models.SET_NULL, null=True, default=None)
    active_tour = models.ForeignKey("tours.Tour", on_delete=models.SET_NULL, null=True, default=None)
    active_date = models.ForeignKey("dates.Date", on_delete=models.SET_NULL, null=True, default=None)
    username = models.CharField(unique=False, blank=True, max_length=255)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["password", "username"]
