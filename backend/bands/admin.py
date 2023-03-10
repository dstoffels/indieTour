from django.contrib import admin
from bands.models import Band, BandAdmin, BandUser

admin.site.register(Band, BandAdmin)
admin.site.register(BandUser)
