from django.contrib import admin
from django.urls import path, include
from bands import views

urlpatterns = [
    path('', views.user_bands),
    path('set/', views.set_active_band)
]
