from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from bands.permissions import IsBandUser
from tours.tours.permissions import IsTourUser
from constants import *
from tours.models import Tour
from tours.tours.serializers import ActiveTourSerializer, TourSerializer
from authentication.models import User 

@api_view([GET, POST])
@permission_classes([IsAuthenticated, IsBandUser])
def band_tours(request, band_id):
  if request.method == GET:
    tours = Tour.objects.filter(band_id=band_id)
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = TourSerializer(data=request.data)
    return serializer.create_or_edit_tour(request)


@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated, IsTourUser])
def tour_details(request, band_id, tour_id):
  tour = get_object_or_404(Tour, pk=tour_id)
  if request.method == GET:
    serializer = ActiveTourSerializer(tour)
    return Response(serializer.data, status=status.HTTP_200_OK)
  elif request.method == PUT:
    serializer = TourSerializer(tour, data=request.data)
    return serializer.create_or_edit_tour(request)
  elif request.method == DELETE:
    tour.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
@api_view([GET])
@permission_classes([IsAuthenticated])
def get_active_tour(request, band_id):
  user = get_object_or_404(User, id=request.user.id)
  tour = get_object_or_404(Tour, id=user.active_tour_id)
  serializer = ActiveTourSerializer(tour)
  return Response(data=serializer.data)

@api_view([POST])
@permission_classes([IsAuthenticated, IsTourUser])
def set_active_tour(request, band_id, tour_id):
  user = get_object_or_404(User, id=request.user.id)
  user.set_active_tour(tour_id)

  tour = get_object_or_404(Tour, id=tour_id)
  serializer = ActiveTourSerializer(tour)
  return Response(serializer.data)