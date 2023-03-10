from django.db.models import CASCADE, DO_NOTHING, TextField, TimeField, CharField,ForeignKey, Model, ManyToManyField, BooleanField
from dates.models import Date

class TimeslotType(Model):
    name = CharField(max_length=255)

class Timeslot(Model):
    date = ForeignKey(Date, on_delete=DO_NOTHING)
    description = TextField(null=True,blank=True)
    start_time = TimeField(null=True,blank=True)
    end_time = TimeField(null=True,blank=True)
    start_location = TextField(null=True,blank=True)
    end_location = TextField(null=True,blank=True)
    type = ForeignKey(TimeslotType, on_delete=DO_NOTHING,null=True, blank=True)
    after_midnight = BooleanField(default=False)

