from rest_framework import serializers
from authentication.models import User
from tours.dates.serializers import DateSerializer
from tours.models import Tour, Date
from rest_framework import status
from rest_framework.response import Response

class TourUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'username']

class TourSerializer(serializers.ModelSerializer):
  dates = serializers.SerializerMethodField()

  def get_dates(self, tour):
    tour_dates = Date.objects.filter(tour_id=tour.id)
    serializer = DateSerializer(tour_dates, many=True)
    return serializer.data

  class Meta:
    model = Tour
    fields = ['id', 'name', 'notes', 'band_id', 'is_archived', 'users', 'dates']

  def create_or_edit_tour(self, request):

      self.is_valid(raise_exception=True)
      band_id = request.user.active_band_id
      band_tours = Tour.objects.filter(band_id=band_id, name=request.data['name'])
      band_tours = band_tours.exclude(id=self.instance.id) if self.instance else band_tours
      if not len(band_tours):
        users = self.__validate_users(request, band_id)
        self.save(band_id=band_id, users=users)
        self.__set_dates(request)
        return Response(self.data, status=status.HTTP_201_CREATED)
      return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)

  def __validate_users(self, request, band_id):
    # need to validate, add/create users by email
    users = request.data['users']
    band_users = User.objects.filter(banduser__band_id=band_id)
    admins = band_users.filter(banduser__is_admin=True).values_list('id', flat=True)
    for user_id in users:
      if user_id not in list(band_users.values_list('id', flat=True)):
        users.remove(user_id)
    return list(set(list(admins) + users))
    
  def __set_dates(self, request):
    dates = request.data['dates']
    if dates:
      for date in dates:
        ser = DateSerializer(data=date)
        ser.is_valid(raise_exception=True)
        ser.save(tour_id=self.instance.id)


class ActiveTourSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tour
    fields = ['id', 'name', 'notes', 'band_id', 'dates', 'users']
    depth = 1

  users = serializers.SerializerMethodField()

  def get_users(self, tour):
    serializer = TourUserSerializer(tour.users, many=True)
    return serializer.data

  dates = serializers.SerializerMethodField()

  def get_dates(self, tour):
    tour_dates = Date.objects.filter(tour_id=tour.id)
    serializer = DateSerializer(tour_dates, many=True)
    return serializer.data
