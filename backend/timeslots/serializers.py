from rest_framework import serializers
from .models import Timeslot


class TimeslotSerializer(serializers.ModelSerializer):
    type_options = serializers.SerializerMethodField()

    def get_type_options(self, timeslot):
        return map(lambda s: s[0], Timeslot.TYPES)

    class Meta:
        model = Timeslot
        exclude = ["date"]

    def create_timeslot(self, req, date_id):
        self.is_valid(raise_exception=True)
        self.save(date_id=date_id)

    def update_timeslot(self, req):
        self.is_valid(raise_exception=True)
        self.save()
