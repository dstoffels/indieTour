from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.date_schedule),
    path("/<uuid:timeslot_id>", views.timeslot_detail),
    path("/types", views.timeslot_types),
]
