from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('active/', views.get_active_tour),
    path('<str:tour_id>/', views.tour_detail),
    path('<str:tour_id>/users/', views.touruser_table),
    path('<str:tour_id>/users/<str:banduser_id>/', views.touruser_detail),
    path('<str:tour_id>/active/', views.set_active_tour),
    path('<str:tour_id>/dates/', include('dates.urls')),
]
