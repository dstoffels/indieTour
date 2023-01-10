from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from bands.permissions import IsBandUser
from constants import *
from bands.models import Band
from bands.serializers import BandSerializer
from authentication.models import User
from django.core.mail import send_mail

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def user_bands(request):
  user = get_object_or_404(User, id=request.user.id)
  if request.method == GET:
    band_users = Band.objects.filter(banduser__user_id=user.id)
    serializer = BandSerializer(band_users, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = BandSerializer(data=request.data)
    return serializer.create_band(request)

@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated, IsBandUser])
def band_details(request, band_id):
  band = get_object_or_404(Band, id=band_id)
  if request.method == GET:
    serializer = BandSerializer(band)
    return Response(serializer.data)
  elif request.method == PUT:
    serializer = BandSerializer(band, data=request.data)
    return serializer.update_band(request)
  elif request.method == DELETE:
    serializer = BandSerializer(band)
    return serializer.delete_band(request, band_id)

@api_view([GET])
@permission_classes([IsAuthenticated])
def get_active_band(request):
  user = get_object_or_404(User, id=request.user.id)
  band = get_object_or_404(Band, id=user.active_band_id)
  serializer = BandSerializer(band)
  return Response(serializer.data)
  

@api_view([POST])
@permission_classes([IsAuthenticated, IsBandUser])
def set_active_band(request, band_id):
  user = get_object_or_404(User, id=request.user.id)
  user.set_active_band(band_id)
  user.set_active_tour(None)
  
  band = get_object_or_404(Band, id=band_id)
  serializer = BandSerializer(band)
  return Response(serializer.data)
  
