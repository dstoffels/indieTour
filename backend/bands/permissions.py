from rest_framework.permissions import BasePermission
from tours.models import Tour
from bands.models import  BandUser

def is_band_admin(user_id, band_id):
  band_user = BandUser.objects.get(user_id=user_id, band_id=band_id)
  return band_user.is_admin

class IsBandAdmin(BasePermission):
  def has_permission(self, request, view):
    user_id = request.user.id
    band_id = request.data["active_band_id"] if "active_band_id" in request.data else request.user.active_band_id
    return is_band_admin(user_id, band_id)

class IsTourUser(BasePermission):
  def has_permission(self, request, view):
    user_id = request.user.id
    tour_id = request.data["active_tour_id"] if "active_tour_id" in request.data else request.user.active_tour_id
    tour = Tour.objects.get(id=tour_id)
    if is_band_admin(user_id, tour.band_id):
      return True
    for user in tour.users.all():
      if user.id == user_id:
        return True
    return False