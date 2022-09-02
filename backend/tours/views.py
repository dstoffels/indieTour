from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from constants import *
from tours.models import Tour
from tours.serializers import TourSerializer
from authentication.models import User
from authentication.serializers import RegistrationSerializer

@api_view([GET, POST, PATCH])
@permission_classes([IsAuthenticated])
def band_tours(request):
  if request.method == GET:
    tours = Tour.objects.filter(band_id=request.user.active_band_id)
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)
  elif request.method == POST:
    serializer = TourSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save(band_id=request.user.active_band_id)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
  elif request.method == PATCH:
    pass

@api_view([PATCH])
@permission_classes([IsAuthenticated])
def set_active_tour(request):
  user = User.objects.get(id=request.user.id)
  serializer = RegistrationSerializer(user, data=request.data, partial=True)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)