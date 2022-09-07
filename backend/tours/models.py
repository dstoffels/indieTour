from django.db.models import CASCADE, Model, ForeignKey, CharField, TextField, ManyToManyField, DateField, BooleanField, TimeField
from authentication.models import User
from contacts.models import Contact
from bands.models import Band

class Tour(Model):
  name = CharField(max_length=255)
  band = ForeignKey(Band, on_delete=CASCADE)
  notes = TextField(null=True, blank=True)
  users = ManyToManyField(User)
  is_archived = BooleanField(default=False)

  def __str__(self) -> str:
    return f'{self.name} ({self.band.name})'

class Date(Model):
  tour = ForeignKey(Tour, on_delete=CASCADE)
  date = DateField()
  title = TextField()
  location = TextField(null=True)
  notes = TextField(null=True)
  is_show_day = BooleanField(default=False)
  is_confirmed = BooleanField(default=False)
  deal = TextField(null=True)

  def __str__(self) -> str:
    return f'{self.date} {self.title} ({self.tour.name})'

class DateContact(Model):
  date = ForeignKey(Date, on_delete=CASCADE)
  contact = ForeignKey(Contact, on_delete=CASCADE)
  title = CharField(max_length=255)

class TimeslotType(Model):
  type = CharField(max_length=255)

  def __str__(self) -> str:
    return self.type

class Timeslot(Model):
  date = ForeignKey(Date, on_delete=CASCADE)
  description = CharField(max_length=255)
  start_time = TimeField()
  end_time = TimeField(null=True)
  start_location = TextField(null=True)
  end_location = TextField(null=True)
  type = ForeignKey(TimeslotType, on_delete=CASCADE)