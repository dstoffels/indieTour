from rest_framework import serializers
from .models import Date
from authentication.models import User
from tours.models import Tour
from rest_framework import status
from rest_framework.response import Response
from timeslots.serializers import TimeslotSerializer

class DateSerializer(serializers.ModelSerializer):
    @staticmethod
    def init_dates(dates, tour_id):
        for date_data in dates:
            date, created = Date.objects.get_or_create(tour_id=tour_id, date=date_data['date'])
            if not created:
                date.save(*date_data)

    timeslots = TimeslotSerializer(many=True, read_only=True, source='timeslot_set')

    class Meta:
        model = Date
        fields = ['id', 'date', 'title', 'location', 'notes', 'is_show_day', 'is_confirmed', 'timeslots']

    def is_valid_tour_date(self, tour_id):
        tour_dates = Date.objects.filter(tour_id=tour_id, date=self.validated_data['date'])
        tour = tour_dates.exclude(id=self.instance.id) if self.instance else tour_dates
        return bool(not len(tour_dates))


    def create_date(self, req, tour_id):
        self.is_valid(raise_exception=True)
        if self.is_valid_tour_date(tour_id):
            self.save(tour_id=tour_id)

            # create timeslots

            return Response(self.data, status=status.HTTP_201_CREATED)
        return Response({"date": "Cannot have duplicate tour dates in a tour."}, status=status.HTTP_400_BAD_REQUEST)
    
    def update_date(self, req):
        self.is_valid(raise_exception=True)
        self.save()
        return Response(self.data, status=status.HTTP_200_OK)