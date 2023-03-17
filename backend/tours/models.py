import uuid
from django.db.models import CASCADE, Model, ForeignKey, CharField, TextField, ManyToManyField, DateField, BooleanField, TimeField, UUIDField
from bands.models import Band, BandUser
from authentication.models import User

# Create your models here.
class Tour(Model):
  id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
  name = CharField(max_length=255, error_messages={'unique': "Name must be unique."})
  band = ForeignKey(Band, on_delete=CASCADE)
  notes = TextField(null=True, blank=True)
  users = ManyToManyField(BandUser, blank=True)
  is_archived = BooleanField(default=False)