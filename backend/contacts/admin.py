from django.contrib import admin
from .models import Contact, DateContact, PlaceContact

# Register your models here.
admin.site.register(Contact)
admin.site.register(DateContact)
admin.site.register(PlaceContact)
