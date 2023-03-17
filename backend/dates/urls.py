from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.tour_dates),
    path('<str:date_id>/', views.tour_date_detail),
    path('<str:date_id>/timeslots/', include('timeslots.urls')),
]
