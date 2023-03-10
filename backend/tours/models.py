from django.db.models import CASCADE, DO_NOTHING, Model, ForeignKey, CharField, TextField, ManyToManyField, DateField, BooleanField, TimeField
from bands.models import Band
from authentication.models import User

# Create your models here.
class Tour(Model):
  name = CharField(max_length=255, error_messages={'unique': "Name must be unique."})
  band = ForeignKey(Band, on_delete=DO_NOTHING)
  notes = TextField(null=True, blank=True)
  users = ManyToManyField(User, blank=True)
  is_archived = BooleanField(default=False)