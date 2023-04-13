from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from django.core.mail import send_mail
from django.db.models import Q
from .serializers import TimeslotSerializer, Timeslot
from dates.serializers import DateSerializer


@api_view([POST, GET])
@permission_classes([IsAuthenticated])
def date_schedule(req, date_id):
    if req.method == GET:
        timeslots = Timeslot.objects.filter(date_id=date_id)
        ser = TimeslotSerializer(timeslots, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        ser = TimeslotSerializer(data=req.data)
        ser.create_timeslot(req, date_id)
        date_ser = DateSerializer(ser.instance.date)
        return Response(date_ser.data)


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def timeslot_detail(req, timeslot_id):
    timeslot = get_object_or_404(Timeslot, id=timeslot_id)
    date_ser = DateSerializer(timeslot.date)
    if req.method == GET:
        ser = TimeslotSerializer(timeslot)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == PATCH:
        ser = TimeslotSerializer(timeslot, data=req.data, partial=True)
        ser.is_valid()
        ser.save()
        return Response(date_ser.data)
    elif req.method == DELETE:
        timeslot.delete()
        return Response(date_ser.data)
