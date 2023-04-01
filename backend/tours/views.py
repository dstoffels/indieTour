from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import TourSerializer, Tour, TourUserSerializer, TourUser
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


# TOUR DETAIL


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def tour_detail(req, tour_id):
    tour = get_object_or_404(Tour, id=tour_id)
    if req.method == GET:
        ser = TourSerializer(tour)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == PATCH:
        ser = TourSerializer(tour, data=req.data, partial=True)
        return ser.create_or_update(req, tour.band_id)
    elif req.method == DELETE:
        tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ACTIVE TOUR #


@api_view([POST, GET])
@permission_classes([IsAuthenticated])
def user_active_tour(req):
    if req.method == POST:
        tour_id = req.data["tour_id"]
        user = get_object_or_404(User, id=req.user.id)
        tour = get_object_or_404(Tour, id=tour_id)
        user.active_tour = tour
        user.save()
        ser = TourSerializer(tour)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == GET:
        user = get_object_or_404(User, id=req.user.id)
        data = TourSerializer(user.active_tour).data if user.active_tour else None
        return Response(data, status=status.HTTP_200_OK)


# TOUR USERS


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def touruser_table(req, tour_id):
    tour = get_object_or_404(Tour, id=tour_id)
    if req.method == GET:
        tourusers = TourUser.objects.filter(tour_id=tour_id)
        for user in tourusers:
            print(user)
        ser = TourUserSerializer(tourusers, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        touruser = TourUserSerializer.create_or_update(req, tour_id)
        ser = TourSerializer(tour)
        return Response(ser.data, status=status.HTTP_201_CREATED)


@api_view([DELETE])
@permission_classes([IsAuthenticated])
def touruser_detail(req, touruser_id):
    touruser = get_object_or_404(TourUser, id=touruser_id)
    ser = TourSerializer(touruser.tour)
    if req.method == DELETE:
        touruser.delete()
        return Response(ser.data)
