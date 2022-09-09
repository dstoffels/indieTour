from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from bands.permissions import IsBandUser
from tours.permissions import IsTourUser
from constants import *
from tours.models import Date, Tour
from tours.serializers import ActiveTourSerializer, DateSerializer, TourSerializer

# TOURS
@api_view([GET, POST])
@permission_classes([IsAuthenticated, IsBandUser])
def band_tours(request):
  band_id = request.user.active_band_id
  if request.method == GET:
    tours = Tour.objects.filter(band_id=band_id)
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = TourSerializer(data=request.data)
    return serializer.create_or_edit_tour(request)


@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated, IsTourUser])
def tour(request, tour_id):
  if request.method == GET:
    return active_tour_response(tour_id)
  elif request.method == PUT:
    tour = Tour.objects.get(id=tour_id)
    serializer = TourSerializer(tour, data=request.data)
    return serializer.create_or_edit_tour(request)
  elif request.method == DELETE:
    tour = get_object_or_404(Tour, pk=tour_id)
    tour.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

def active_tour_response(tour_id):
  active_tour = Tour.objects.get(id=tour_id)
  tour_serializer = ActiveTourSerializer(active_tour)
  return Response(tour_serializer.data, status=status.HTTP_200_OK)

def error_response(serializer):
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  
