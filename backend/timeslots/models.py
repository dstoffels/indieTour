import uuid
from django.db.models import CASCADE, DO_NOTHING, TextField, TimeField, CharField,ForeignKey, Model, ManyToManyField, BooleanField, UUIDField
from dates.models import Date

class TimeslotType(Model):
    id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
    name = CharField(max_length=255, unique=True)

class Timeslot(Model):
    id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
    date = ForeignKey(Date, on_delete=DO_NOTHING)
    description = TextField(null=True,blank=True)
    start_time = TimeField()
    end_time = TimeField(null=True,blank=True)
    start_location = TextField(null=True,blank=True)
    end_location = TextField(null=True,blank=True)
    type = ForeignKey(TimeslotType, on_delete=DO_NOTHING,null=True, blank=True)
    after_midnight = BooleanField(default=False)

