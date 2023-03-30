from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin", admin.site.urls),
    path("api/auth", include("authentication.urls")),
    path("api/band", include("bands.urls")),
    path("api/tour", include("tours.urls")),
    path("api/date", include("dates.urls")),  # timeslots accessed via api/date/timeslot
    path("api/prospect", include("prospects.urls")),  # log_entries accessed via api/prospect/logentry
    path("api/contact", include("contacts.urls")),
    path("api/venue", include("venues.urls")),
    path("gapi", include("gapi.urls")),  # proxy for google apis
]
