from rest_framework import serializers
from authentication.models import User
from authentication.serializers import RegistrationSerializer
from bands.models import BandUser
from tours.models import Tour, Date, DateContact, Timeslot
from rest_framework import status
from rest_framework.response import Response


class TimeslotSerializer(serializers.ModelSerializer):
  class Meta:
    model = Timeslot
    fields = '__all__'
    # depth = 1

class DateContactSerializer(serializers.ModelSerializer):
  class Meta:
    model = DateContact
    fields = ['title', 'contact']
    depth = 1

class DateSerializer(serializers.ModelSerializer):
  timeslots = serializers.SerializerMethodField()
  contacts = serializers.SerializerMethodField()


  class Meta:
    model = Date
    fields = ['id', 'date', 'title', 'location', 'deal', 'notes', 'is_show_day', 'is_confirmed', 'timeslots', 'contacts']
    depth = 1


  def get_timeslots(self, date):
    date_timeslots = Timeslot.objects.filter(date_id=date.id)
    serializer = TimeslotSerializer(date_timeslots, many=True)
    return serializer.data

  def get_contacts(self, date):
    date_contacts = DateContact.objects.filter(date_id=date.id)
    serializer = DateContactSerializer(date_contacts, many=True)
    return serializer.data

  def is_valid_date(self, data):
    if self.is_valid():
      tour_dates = Date.objects.filter(tour_id=data["tour_id"])
      for tour_date in tour_dates:
        if str(tour_date.date) == data["date"]:
          raise serializers.ValidationError('Date already exists in tour.')
    else: return False
    return True

class TourUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'username']

class TourSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tour
    fields = ['id', 'name', 'notes', 'band_id', 'is_archived', 'users']

  def create_or_edit_tour(self, request):
    if self.is_valid():
      band_id = request.user.active_band_id
      band_tours = Tour.objects.filter(band_id=band_id, name=request.data['name'])
      band_tours = band_tours.exclude(id=self.instance.id) if self.instance else band_tours
      if not len(band_tours):
        users = self.__validate_users(request, band_id)
        self.save(band_id=band_id, users=users)
        return Response(self.data, status=status.HTTP_201_CREATED)
      return Response({"name": "Cannot have duplicate tour names."}, status=status.HTTP_400_BAD_REQUEST)
    return Response(self.errors, status=status.HTTP_400_BAD_REQUEST)

  def __validate_users(self, request, band_id):
    users = request.data['users']
    band_users = User.objects.filter(banduser__band_id=band_id)
    admins = band_users.filter(banduser__is_admin=True).values_list('id', flat=True)
    for user_id in users:
      if user_id not in list(band_users.values_list('id', flat=True)):
        users.remove(user_id)

    return list(set(list(admins) + users))




class ActiveTourSerializer(serializers.ModelSerializer):
  users = serializers.SerializerMethodField()

  def get_users(self, tour):
    serializer = TourUserSerializer(tour.users, many=True)
    return serializer.data

  class Meta:
    model = Tour
    fields = ['id', 'name', 'notes', 'band_id', 'dates', 'users']
    depth = 1

  dates = serializers.SerializerMethodField()

  def get_dates(self, tour):
    tour_dates = Date.objects.filter(tour_id=tour.id)
    serializer = DateSerializer(tour_dates, many=True)
    return serializer.data
