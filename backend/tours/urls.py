from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('set/', views.set_active_tour)
]