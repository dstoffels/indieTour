from django.contrib import admin
from tours.models import TimeslotType, Tour, Date, Timeslot
# Register your models here.
admin.site.register(Tour)
admin.site.register(Date)
admin.site.register(Timeslot)
admin.site.register(TimeslotType)