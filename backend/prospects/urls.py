from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.prospect_log),
    path("/<uuid:prospect_id>", views.prospect_detail),
    path("/<uuid:prospect_id>/log", views.prospect_log),
    path("/log_entry", views.log_entry_detail),
]
