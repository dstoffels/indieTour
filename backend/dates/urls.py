from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.tour_dates),
    path('<int:date_id>/', views.tour_date_detail),
    path('<int:date_id>/timeslots/', include('timeslots.urls')),
]
