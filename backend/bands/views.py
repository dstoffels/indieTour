from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from default_responses import put_default
from bands.permissions import IsBandAdmin
from constants import *
from bands.models import Band, BandUser
from bands.serializers import BandSerializer
from authentication.models import User
from django.core.mail import send_mail

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def user_bands(request):
  user = get_object_or_404(User, id=request.user.id)
  if request.method == GET:
    bands = Band.objects.filter(users__id__icontains=user.id)
    serializer = BandSerializer(bands, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = BandSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      serializer.add_users_to_band(request)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view([PUT, DELETE])
@permission_classes([IsAuthenticated, IsBandAdmin])
def band(request, id):
  band = get_object_or_404(Band, id=id)
  if request.method == PUT:
      return put_default(request, band, BandSerializer)

def add_users_to_band(request, band):
  for user in request.data['users']:
    try:
      band_user = User.objects.get(email=user['email'])
      band.banduser_set.create(user=band_user, is_admin=user['is_admin'])
    except:
      password = User.objects.make_random_password()
      new_user = User.objects.create(email=user['email'], password=password)
      # TODO email new user 
      # setup SMTP hosting in settings
      # (EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) 
      # (EMAIL_USE_TLS/EMAIL_USE_SSL)
      # send_mail(f'INDIETOUR: You\'ve been added to {band.name}',)

def remove_users_from_band(request, band):
  band_users = BandUser.objects.filter(band_id=band.id)
  for band_user in band_users.all():
    if band_user.id not in request.data['users']:
      band_user.delete()