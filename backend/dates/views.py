from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from authentication.models import User
from django.core.mail import send_mail
from django.db.models import Q
from .serializers import DateSerializer, Date


@api_view([POST, GET])
@permission_classes([IsAuthenticated])
def tour_dates(req, tour_id):
    if req.method == GET:
        dates = Date.objects.filter(tour_id=tour_id)
        ser = DateSerializer(dates, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == POST:
        ser = DateSerializer(data=req.data)
        return ser.create_date(req, tour_id)


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def tour_date_detail(req, date_id):
    date = get_object_or_404(Date, id=date_id)
    if req.method == GET:
        ser = DateSerializer(date)
        return Response(ser.data, status=status.HTTP_200_OK)
    elif req.method == PATCH:
        ser = DateSerializer(date, data=req.data, partial=True)
        return ser.update_date(req)
    elif req.method == DELETE:
        date.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
