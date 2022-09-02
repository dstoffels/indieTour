from django.db.models import CASCADE, Model, ForeignKey, CharField, TextField, ManyToManyField, DateField, BooleanField, TimeField
from authentication.models import User
from contacts.models import Contact
from bands.models import Band

class Tour(Model):
  name = CharField(max_length=255, unique=True)
  band = ForeignKey(Band, on_delete=CASCADE)
  notes = TextField(null=True, blank=True)
  users = ManyToManyField(User)

class Date(Model):
  tour = ForeignKey(Tour, on_delete=CASCADE)
  date = DateField()
  title = TextField()
  location = TextField(null=True)
  notes = TextField(null=True)
  is_show_day = BooleanField(default=False)
  is_confirmed = BooleanField(default=False)
  deal = TextField(null=True)
  notes = TextField(null=True)

class DateContact(Model):
  date = ForeignKey(Date, on_delete=CASCADE)
  contact = ForeignKey(Contact, on_delete=CASCADE)
  title = CharField(max_length=255)

class EventType(Model):
  type = CharField(max_length=255)

class Timeslot(Model):
  date = ForeignKey(Date, on_delete=CASCADE)
  description = CharField(max_length=255)
  start_time = TimeField()
  end_time = TimeField(null=True)
  start_location = TextField()
  end_location = TextField()
  event_type = ForeignKey(EventType, on_delete=CASCADE)