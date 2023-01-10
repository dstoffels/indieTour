from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('<int:tour_id>/', views.tour_details),
    path('<int:tour_id>/dates/', include('tours.dates.urls')),
    path('active/', views.get_active_tour),
    path('<int:tour_id>/active/', views.set_active_tour),
]