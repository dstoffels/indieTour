from rest_framework import serializers
from tours.models import Tour, Date, DateContact, Timeslot


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
  class Meta:
    model = Date
    fields = ['id', 'date', 'title', 'location', 'deal', 'notes', 'is_show_day', 'is_confirmed', 'timeslots', 'contacts']

  timeslots = serializers.SerializerMethodField()
  contacts = serializers.SerializerMethodField()

  def get_timeslots(self, date):
    date_timeslots = Timeslot.objects.filter(date_id=date.id)
    serializer = TimeslotSerializer(date_timeslots, many=True)
    return serializer.data

  def get_contacts(self, date):
    date_contacts = DateContact.objects.filter(date_id=date.id)
    serializer = DateContactSerializer(date_contacts, many=True)
    return serializer.data

class TourSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tour
    fields = ['id', 'name', 'notes', 'band_id', 'dates']
    # depth = 1

  dates = serializers.SerializerMethodField()

  def get_dates(self, tour):
    tour_dates = Date.objects.filter(tour_id=tour.id)
    serializer = DateSerializer(tour_dates, many=True)
    return serializer.data