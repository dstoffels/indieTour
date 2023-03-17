from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.date_schedule),
    path('types/', views.timeslot_types),
    path('<str:timeslot_id>/', views.timeslot_detail),
]
