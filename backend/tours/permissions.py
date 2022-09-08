from bands.permissions import IsBandUser
from constants import *
from tours.models import Tour

class TourPermission(IsBandUser):
  tour_id = None
  tour = None

  def has_permission(self, request, view):
    if super().has_permission(request, view):
      self.tour_id = request.data["active_tour_id"] if "active_tour_id" in request.data else view.kwargs.get('id', None)
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
