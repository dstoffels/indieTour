from django.urls import path, include
from . import views

urlpatterns = [
    path("/<uuid:contact_id>", views.contact_detail),
    path("/<uuid:contact_id>/methods", views.methods_table),
    path("/method/<uuid:method_id>", views.method_detail),
]
