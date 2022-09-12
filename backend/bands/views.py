from rest_framework import status
from rest_framework.response import Response
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
    band_users = Band.objects.filter(banduser__id=user.id)
    serializer = BandSerializer(band_users, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = BandSerializer(data=request.data)
    return serializer.create_band(request)

@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated, IsBandUser])
def band(request, band_id):
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


    