from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.user_contacts),
    path("/<uuid:contact_id>", views.contact_detail),
    path("/<uuid:contact_id>/methods", views.methods_table),
    path("/method/<uuid:method_id>", views.method_detail),
    path("/method/options", views.method_options),
]
