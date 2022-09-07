from django.contrib import admin
from bands.models import Band, BandAdmin

admin.site.register(Band, BandAdmin)
