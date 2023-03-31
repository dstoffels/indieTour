from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.tour_dates),
    path("/<uuid:date_id>", views.tour_date_detail),
    path("/<uuid:date_id>/schedule", include("timeslots.urls")),
    path("/<uuid:date_id>/contacts", include("contacts.date_contact_urls")),
    path("/<uuid:date_id>/prospects", include("prospects.urls")),
    path("/timeslot", include("timeslots.urls")),
]
