from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.date_schedule),
    path("/types", views.timeslot_types),
    path("/<uuid:timeslot_id>", views.timeslot_detail),
]
