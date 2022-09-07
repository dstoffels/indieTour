from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from bands.permissions import IsBandAdmin, IsTourUser
from constants import *
from tours.models import Date, Tour
from tours.serializers import ActiveTourSerializer, DateSerializer, TourSerializer
from authentication.models import User
from authentication.serializers import RegistrationSerializer

# TOUR DATES
@api_view([POST, PATCH, DELETE])
@permission_classes([IsAuthenticated, IsBandAdmin])
def tour_dates(request):
  tour_id = request.user.active_tour_id
  if request.method == POST:
    date_serializer = DateSerializer(data=request.data)
    if date_serializer.is_valid_date(request.data):
      date_serializer.save(tour_id=tour_id)
      return active_tour_response(tour_id)
    return error_response(date_serializer)
  if request.method == PATCH:
    pass
  if request.method == DELETE:
    pass

# TOURS
@api_view([GET, POST, PATCH, DELETE])
@permission_classes([IsAuthenticated, IsBandAdmin])
def band_tours(request):
  band_id = request.user.active_band_id
  tour_id = request.user.active_tour_id
  if request.method == GET:
    tours = Tour.objects.filter(band_id=band_id)
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = TourSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save(band_id=band_id)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
  elif request.method == PATCH:
    tour = Tour.objects.get(id=tour_id)
    serializer = TourSerializer(tour, data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return error_response(serializer)
  elif request.method == DELETE:
    tour = get_object_or_404(Tour, pk=tour_id)
    tour.is_archived = not tour.is_archived
    tour.save()
    serializer = TourSerializer(tour)
    return Response(serializer.data, status=status.HTTP_200_OK)

# GET/SET ACTIVE TOUR
@api_view([GET, PATCH])
@permission_classes([IsAuthenticated, IsTourUser])
def active_tour(request):
  if request.method == GET:
    return active_tour_response(request.user.active_tour_id)
  elif request.method == PATCH:
    user = User.objects.get(id=request.user.id)
    serializer = RegistrationSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return active_tour_response(user.active_tour_id)
    return error_response(serializer)

def active_tour_response(tour_id):
  active_tour = Tour.objects.get(id=tour_id)
  tour_serializer = ActiveTourSerializer(active_tour)
  return Response(tour_serializer.data, status=status.HTTP_200_OK)

def error_response(serializer):
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  
