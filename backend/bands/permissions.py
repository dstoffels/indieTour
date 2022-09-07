from rest_framework.permissions import BasePermission
from authentication.models import User
from tours.models import Tour
from bands.models import Band

def is_band_admin(user_id, band_id):
  user = User.objects.get(id=user_id)
  band = Band.objects.get(id=band_id)
  

  if band.owner.id == user_id:
    return True
  for admin in band.admins.all():
    if admin.id == user_id:
      return True
  return False

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