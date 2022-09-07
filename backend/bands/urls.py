from django.contrib import admin
from django.urls import path, include
from bands import views

urlpatterns = [
    path('', views.user_bands),
    path('<int:id>', views.band)
]
