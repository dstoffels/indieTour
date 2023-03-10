from rest_framework import serializers
from .models import Date
from authentication.models import User
from tours.models import Tour
from rest_framework import status
from rest_framework.response import Response

class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = ['id', 'date']