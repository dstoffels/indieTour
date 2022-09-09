from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('<int:tour_id>/', views.tour),
    path('<int:tour_id>/dates/', include('tours.dates.urls')),
]