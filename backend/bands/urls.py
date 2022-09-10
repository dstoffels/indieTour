from django.contrib import admin
from django.urls import path, include
from bands import views
from tours.tours import views as tour_views

urlpatterns = [
    path('', views.user_bands),
    path('<int:band_id>/', views.band),
    path('<int:band_id>/tours/', include('tours.tours.urls')),
]
