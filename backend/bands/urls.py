from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.bands_table),
    path('active/', views.get_active_band),
    path('<str:band_id>/', views.band_detail),
    path('<str:band_id>/users/', views.banduser_table),
    path('<str:band_id>/users/<str:banduser_id>/', views.banduser_detail),
    path('<str:band_id>/active/', views.set_active_band),
    path('<str:band_id>/tours/', include('tours.urls')),
]
