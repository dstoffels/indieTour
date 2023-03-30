from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from authentication.models import User
from django.core.mail import send_mail


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def prospect_log(req, date_id):
    if req.method == GET:
        pass
    elif req.method == POST:
        pass
    return Response("prospects table")


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def prospect_detail(req, prospect_id):
    if req.method == GET:
        pass
    elif req.method == PATCH:
        pass
    elif req.method == DELETE:
        pass
    return Response("prospect detail")


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def prospect_log(req, prospect_id):
    if req.method == GET:
        pass
    elif req.method == POST:
        pass
    return Response("prospect log")


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def log_entry_detail(req, date_id):
    if req.method == GET:
        pass
    elif req.method == PATCH:
        pass
    elif req.method == DELETE:
        pass
    return Response("prospects table")
