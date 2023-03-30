from django.urls import path, include
from . import views

urlpatterns = [
    path("/maps/place/findplacefromtext", views.places),
    path("/maps/place/autocomplete", views.autocomplete),
]
