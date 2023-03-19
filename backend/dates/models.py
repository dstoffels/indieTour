import uuid
from django.db.models import CASCADE, Model, ForeignKey, TextField, DateField, BooleanField, UUIDField
from tours.models import Tour

# Create your models here.
class Date(Model):
  id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
  tour = ForeignKey(Tour, on_delete=CASCADE, related_name='tourdates')
  date = DateField()
  title = TextField(default='', blank=True)
  location = TextField(default='', blank=True)
  notes = TextField(default='', blank=True)
  is_show_day = BooleanField(default=False)
  is_confirmed = BooleanField(default=False)
  deal = TextField(null=True)

  def __str__(self) -> str:
    return f'{self.date} {self.title} ({self.tour.name})'