from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import TourSerializer, Tour
from authentication.models import User
from django.core.mail import send_mail


@api_view([POST, GET])
@permission_classes([IsAuthenticated])
def band_tours(req, band_id):
    if req.method == GET:
        tours = Tour.objects.filter(band_id=band_id)
        ser = TourSerializer(tours, many=True)
        return Response(data=ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        ser = TourSerializer(data=req.data)
        return ser.create_tour(req, band_id)
  
@api_view([GET, PUT, DELETE])
@permission_classes([IsAuthenticated])
def tour_detail(req, band_id, tour_id):
    tour = get_object_or_404(Tour, id=tour_id)
    if req.method == GET:
        ser = TourSerializer(tour)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == PUT:
        ser = TourSerializer(tour, data=req.data)
        return ser.update_tour(req)
    elif req.method == DELETE:
        tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# ACTIVE TOUR #

@api_view([POST])
@permission_classes([IsAuthenticated])
def set_active_tour(req, band_id, tour_id):
    user = get_object_or_404(User, id=req.user.id)
    tour = get_object_or_404(Tour, id=tour_id)
    user.active_tour = tour
    user.save()
    ser = TourSerializer(tour)
    return Response(ser.data, status=status.HTTP_200_OK)
    

@api_view([GET])
@permission_classes([IsAuthenticated])
def get_active_tour(req, band_id):
    user = get_object_or_404(User, id=req.user.id)
    ser = TourSerializer(user.active_tour)
    return Response(ser.data, status=status.HTTP_200_OK)