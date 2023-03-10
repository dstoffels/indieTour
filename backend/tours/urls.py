from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.band_tours),
    path('active/', views.get_active_tour),
    path('<int:tour_id>/', views.tour_detail),
    path('<int:tour_id>/active/', views.set_active_tour),
    # path('<int:tour_id>/dates/', include('dates.urls')),
]
