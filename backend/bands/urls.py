from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.user_bands),
    path('active/', views.get_active_band),
    path('<int:band_id>/', views.band_detail),
    path('<int:band_id>/users/', views.banduser_table),
    path('<int:band_id>/users/<int:banduser_id>/', views.banduser_detail),
    path('<int:band_id>/active/', views.set_active_band),
    path('<int:band_id>/tours/', include('tours.urls')),
]
