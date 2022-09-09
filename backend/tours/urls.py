from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('<int:tour_id>/', views.tour),
    # path('dates/', views.tour_dates),
]