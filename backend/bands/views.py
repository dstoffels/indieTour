from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from default_views import patch_view
from bands.permissions import IsBandAdmin
from constants import *
from bands.models import Band
from bands.serializers import BandSerializer
from django.db.models import Q

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def user_bands(request):
  if request.method == GET:
    bands = Band.objects.filter(users__id__icontains=request.user.id)
    serializer = BandSerializer(bands, many=True)
    return Response(serializer.data)
  # elif request.method == POST:
  #   serializer = BandSerializer(data=request.data)
  #   if serializer.is_valid():
  #     serializer.save(owner=request.user)
  #     return Response(serializer.data, status=status.HTTP_201_CREATED)
  #   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view([PATCH, DELETE])
@permission_classes([IsAuthenticated, IsBandAdmin])
def band(request, id):
  band = get_object_or_404(Band, id=id)
  if request.method == PATCH:
      return patch_view(request, band, BandSerializer)

    
