from urllib.request import Request
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from bands.permissions import IsBandUser
from tours.tours.permissions import IsTourUser
from constants import *
from tours.models import Date
from tours.dates.serializers import DateSerializer

@api_view([GET, POST])
@permission_classes([IsAuthenticated, IsTourUser])
def tour_dates(request, tour_id):
  if request.method == GET:
    dates = Date.objects.filter(tour_id=tour_id)
    serializer = DateSerializer(dates, many=True)
    return Response(serializer.data)
  if request.method == POST:
    serializer = DateSerializer(data=request.data)
    return serializer.create_or_edit_date(request, tour_id)

@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated, IsTourUser])
def date(request, tour_id, date_id):
  if request.method == GET:
    pass
  if request.method == PUT:
    pass
  if request.method == DELETE:
    pass