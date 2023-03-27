from django.urls import path, include
from . import views

urlpatterns = [
    path('places/', views.places),
    path('places/autocomplete/', views.autocomplete),
]