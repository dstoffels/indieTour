from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

# from bands.permissions import IsBandUser
from constants import *
from bands.models import Band, BandUser
from bands.band_user_serializer import BandUserSerializer
from bands.serializers import BandSerializer
from authentication.models import User
from tours.models import Tour
from django.core.mail import send_mail
from django.db.models import Q
from itertools import chain


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def bands_table(req):
    if req.method == GET:
        users_bands = list(chain(Band.objects.filter(owner=req.user), Band.objects.filter(banduser__user=req.user)))
        ser = BandSerializer(users_bands, many=True)
        return Response(ser.data)
    elif req.method == POST:
        ser = BandSerializer(data=req.data)
        return ser.create_band(req)


@api_view([GET, DELETE, PATCH])
@permission_classes([IsAuthenticated])
def band_detail(req, band_id):
    band = get_object_or_404(Band, id=band_id)

    if req.method == GET:
        ser = BandSerializer(band)
        return Response(ser.data, status=status.HTTP_200_OK)

    elif req.method == PATCH:
        ser = BandSerializer(band, data=req.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data, status=status.HTTP_200_OK)

    elif req.method == DELETE:
        band.delete()
        user = get_object_or_404(User, id=req.user.id)
        users_bands = Band.objects.filter(Q(owner__id=req.user.id) | Q(banduser__user_id=req.user.id))
        user.active_band = users_bands[0] if len(users_bands) > 0 else None
        user.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view([POST])
@permission_classes([IsAuthenticated])
def set_active_band(req, band_id):
    user = get_object_or_404(User, id=req.user.id)
    band = get_object_or_404(Band, id=band_id)
    band_tours = Tour.objects.filter(band_id=band_id)
    user.active_tour = band_tours[len(band_tours) - 1] if len(band_tours) > 0 else None
    user.active_band = band
    user.save()
    ser = BandSerializer(band)
    return Response(ser.data, status=status.HTTP_200_OK)


@api_view([GET])
@permission_classes([IsAuthenticated])
def get_active_band(req):
    user = get_object_or_404(User, id=req.user.id)
    data = None
    if user.active_band:
        ser = BandSerializer(user.active_band)
        data = ser.data
    return Response(data, status=status.HTTP_200_OK)


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def banduser_table(req, band_id):
    if req.method == GET:
        bandusers = BandUser.objects.filter(band_id=band_id)
        ser = BandUserSerializer(bandusers, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        bandusers = BandUserSerializer.create_or_update([req.data], band_id)
        ser = BandUserSerializer(bandusers[0])
        return Response(ser.data, status=status.HTTP_201_CREATED)


@api_view([PATCH, DELETE])
@permission_classes([IsAuthenticated])
def banduser_detail(req, banduser_id):
    banduser = get_object_or_404(BandUser, id=banduser_id)
    bandusers = BandUser.objects.filter(band_id=banduser.band.id)
    bandusers_ser = BandUserSerializer(bandusers, many=True)

    if req.method == PATCH:
        ser = BandUserSerializer(banduser, data=req.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(bandusers_ser.data)
    if req.method == DELETE:
        banduser.delete()
        return Response(bandusers_ser.data)
