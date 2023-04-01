from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.bands_table),
    path("/active", views.user_active_band),
    path("/<uuid:band_id>", views.band_detail),
    path("/<uuid:band_id>/users", views.banduser_table),
    path("/user/<uuid:banduser_id>", views.banduser_detail),
    path("/<uuid:band_id>/tours", include("tours.urls")),
]
