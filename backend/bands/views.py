from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
# from bands.permissions import IsBandUser
from constants import *
from bands.models import Band
from bands.serializers import BandSerializer
from authentication.models import User
from django.core.mail import send_mail
from django.db.models import Q

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def user_bands(request):
  if request.method == GET:
    band_users = Band.objects.filter(Q(owner__id=request.user.id) | Q(banduser__user_id=request.user.id))
    serializer = BandSerializer(band_users, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = BandSerializer(data=request.data)
    return serializer.create_band(request)

@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated])
def band_detail(req, band_id):
  band = get_object_or_404(Band, id=band_id)
  if req.method == GET:
    ser = BandSerializer(band)
    return Response(ser.data, status=status.HTTP_200_OK)

  elif req.method == PUT:
    ser = BandSerializer(band, data=req.data)
    return ser.update_band(req)
  elif req.method == DELETE:
    band.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
@api_view([POST])
@permission_classes([IsAuthenticated])
def set_active_band(req, band_id):
  user = get_object_or_404(User, id=req.user.id)
  band = get_object_or_404(Band, id=band_id)
  user.active_band = band
  user.save()
  ser = BandSerializer(band)
  return Response(ser.data, status=status.HTTP_200_OK)

@api_view([GET])
@permission_classes([IsAuthenticated])
def get_active_band(req):
  user = get_object_or_404(User, id=req.user.id)
  ser = BandSerializer(user.active_band)
  return Response(ser.data, status=status.HTTP_200_OK)
