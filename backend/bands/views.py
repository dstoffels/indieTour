from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from default_responses import put_default
from bands.permissions import IsBandAdmin
from constants import *
from bands.models import Band
from bands.serializers import BandSerializer
from authentication.models import User

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def user_bands(request):
  user = User.objects.get(id=request.user.id)
  if request.method == GET:
    bands = Band.objects.filter(users__id__icontains=user.id)
    serializer = BandSerializer(bands, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    new_band = Band.objects.create(name=request.data['name'])
    # set band owner
    new_band.banduser_set.create(user=user, is_admin=True, is_owner=True)
    add_users_to_band(request, new_band)
    serializer = BandSerializer(new_band)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

def add_users_to_band(request, band):
    for user in request.data['users']:
      band_user = User.objects.get(email=user['email'])
      if band_user:
        band.banduser_set.create(user=band_user, is_admin=user['is_admin'])
      else:
        # TODO create new user w random pw, email new user
        pass



@api_view([PUT, DELETE])
@permission_classes([IsAuthenticated, IsBandAdmin])
def band(request, id):
  band = get_object_or_404(Band, id=id)
  if request.method == PUT:
      return put_default(request, band, BandSerializer)

    
