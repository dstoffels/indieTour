from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.date_contacts),
    path("/<uuid:datecontact_id>", views.datecontact_detail),
]
