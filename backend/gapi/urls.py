from django.urls import path, include
from . import views
from contacts.views import place_contacts

urlpatterns = [
    path("/maps/place/<str:place_id>/contacts", place_contacts),
    path("/maps/place/autocomplete", views.autocomplete),
    path("/maps/place/findplacefromtext", views.place_by_text),
    path("/maps/place/details", views.place_by_id),
    path("/maps/directions", views.directions),
]
