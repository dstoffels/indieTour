from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.place_contacts),
    path("/<uuid:place_contact_id>", views.place_contact_detail),
]
