from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.venues_table),
    path("/<uuid:venue_id>", views.venue_detail),
]
