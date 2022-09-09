from django.urls import path, include
from tours.dates import views

urlpatterns = [
  path('', views.tour_dates),
  path('<int:date_id>/', views.date)
]
