from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from tours.models import Date, DateContact, Timeslot

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

  def create_or_edit_date(self, request, tour_id):
    if self.is_valid():
      tour_dates = Date.objects.filter(tour_id=tour_id, date=request.data['date'])
      tour_dates = tour_dates.exclude(id=self.instance.id) if self.instance else tour_dates
      if not len(tour_dates):
        self.save(tour_id=tour_id)
        return Response(self.data, status=status.HTTP_200_OK)
      return Response({"date": "Cannot have duplicate dates in a tour."}, status=status.HTTP_400_BAD_REQUEST)
    return Response(self.errors, status=status.HTTP_400_BAD_REQUEST)

  def is_valid_date(self, data):
    if self.is_valid():
      tour_dates = Date.objects.filter(tour_id=data["tour_id"])
      for tour_date in tour_dates:
        if str(tour_date.date) == data["date"]:
          raise serializers.ValidationError('Date already exists in tour.')
    else: return False
    return True