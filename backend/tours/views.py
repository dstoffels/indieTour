from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import TourSerializer, Tour
from bands.band_user_serializer import BandUserSerializer, BandUser
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
        return ser.create_or_update(req, band_id)
  
@api_view([GET, PUT, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def tour_detail(req, band_id, tour_id):
    tour = get_object_or_404(Tour, id=tour_id)
    if req.method == GET:
        ser = TourSerializer(tour)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == PUT:
        ser = TourSerializer(tour, data=req.data)
        return ser.create_or_update(req)
    elif req.method == PATCH:
        ser = TourSerializer(tour, data=req.data, partial=True)
        return ser.create_or_update(req, band_id)
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
    data = TourSerializer(user.active_tour).data if user.active_tour else None
    return Response(data, status=status.HTTP_200_OK)

# TOUR USERS

@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def touruser_table(req, band_id, tour_id):
    tour = get_object_or_404(Tour, id=tour_id)
    if req.method == GET:
        tourusers = tour.users.all()
        print(tourusers)
        ser = BandUserSerializer(tourusers, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        tourusers = BandUserSerializer.create_or_update([req.data], band_id)
        tour.users.add(*tourusers)
        ser = BandUserSerializer(tour.users, many=True)
        return Response(ser.data, status=status.HTTP_201_CREATED)

@api_view([DELETE])
@permission_classes([IsAuthenticated])
def touruser_detail(req, band_id, tour_id, banduser_id):
    tour = get_object_or_404(Tour, band_id=band_id, id=tour_id)
    touruser = tour.users.get(id=banduser_id)
    # if req.method == PATCH:
    #     ser = BandUserSerializer(touruser, data=req.data, partial=True)
    #     ser.is_valid(raise_exception=True)
    #     ser.save()
    #     return Response(ser.data, status=status.HTTP_200_OK)
    if req.method == DELETE:
        tour.users.remove(touruser)
        return Response(status=status.HTTP_204_NO_CONTENT)