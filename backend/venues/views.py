from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from authentication.models import User
from django.core.mail import send_mail
from .models import Venue
from .serializers import VenueSerializer


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def venues_table(req):
    if req.method == GET:
        pass
    elif req.method == POST:
        pass
    return Response("prospects table")


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def venue_detail(req, venue_id):
    venue = get_object_or_404(Venue, id=venue_id)
    if req.method == GET:
        pass
    elif req.method == PATCH:
        pass
    elif req.method == DELETE:
        pass
    return Response("prospect detail")
