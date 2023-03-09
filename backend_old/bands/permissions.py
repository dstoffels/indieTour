from rest_framework.permissions import BasePermission
from constants import *
from bands.models import BandUser


class BandPermission(BasePermission):
  SAFE_METHODS = [GET]
  user_id = None
  band_id = None
  band_user = None

  def has_permission(self, request, view):
    self.user_id = request.user.id
    self.band_id = view.kwargs.get('band_id', None)
    try:
      self.band_user = BandUser.objects.get(user_id=self.user_id, band_id=self.band_id)
      return True
    except:
      return False

class IsBandUser(BandPermission):
  def has_permission(self, request, view):
    if super().has_permission(request, view):
      if request.method in self.SAFE_METHODS:
        return True
      return self.band_user.is_admin
    return False