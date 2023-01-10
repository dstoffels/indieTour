from django.contrib import admin
from django.urls import path, include
from bands import views
from tours.tours import views as tour_views

urlpatterns = [
    path('', views.user_bands),
    path('<int:band_id>/', views.band_details),
    path('active/', views.get_active_band),
    path('<int:band_id>/active/', views.set_active_band),
    path('<int:band_id>/tours/', include('tours.tours.urls')),
]
