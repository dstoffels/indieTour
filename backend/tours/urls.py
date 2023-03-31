from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.band_tours),
    path("/<uuid:tour_id>", views.tour_detail),
    path("/<uuid:tour_id>/active", views.set_active_tour),
    path("/<uuid:tour_id>/users", views.touruser_table),
    path("/user/<uuid:touruser_id>", views.touruser_detail),
    path("/<uuid:tour_id>/dates", include("dates.urls")),
]
