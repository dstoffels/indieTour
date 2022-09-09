from bands.permissions import IsBandUser
from constants import *
from tours.models import Tour

class TourPermission(IsBandUser):
  tour_id = None
  tour = None

  def has_permission(self, request, view):
    if super().has_permission(request, view):
      self.tour_id = view.kwargs.get('tour_id', None)
      try:
        self.tour = Tour.objects.get(id=self.tour_id)
        return True
      except:
        pass
    return False

class IsTourUser(TourPermission):
  def has_permission(self, request, view):
    if super().has_permission(request, view):
      return request.user in self.tour.users.all()
    return False
