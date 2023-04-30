from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from authentication.models import User
from django.core.mail import send_mail
from .models import Prospect, LogEntry
from .serializers import ProspectSerializer, LogEntrySerializer


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def date_prospects(req, date_id):
    if req.method == GET:
        date_prospects = Prospect.objects.filter(date_id=date_id)
        ser = ProspectSerializer(date_prospects, many=True)
        return Response(ser.data)
    elif req.method == POST:
        req.data["creator"] = req.user
        ser = ProspectSerializer(data=req.data)
        ser.is_valid(raise_exception=True)
        ser.save(date_id=date_id)
        return Response(ser.data, 201)
    return Response("prospects table")


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def prospect_detail(req, prospect_id):
    prospect = get_object_or_404(Prospect, id=prospect_id)
    if req.method == GET:
        ser = ProspectSerializer(prospect)
        return Response(ser.data)
    elif req.method == PATCH:
        ser = ProspectSerializer(prospect, data=req.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)
    elif req.method == DELETE:
        prospect.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def prospect_log(req, prospect_id):
    prospect = get_object_or_404(Prospect, id=prospect_id)
    prospect_ser = ProspectSerializer(prospect)
    if req.method == GET:
        log_entries = LogEntry.objects.filter(prospect_id=prospect_id)
        ser = LogEntrySerializer(log_entries, many=True)
        return Response(ser.data)
    elif req.method == POST:
        ser = LogEntrySerializer(data=req.data)
        ser.is_valid(raise_exception=True)
        ser.save(prospect_id=prospect_id)
        return Response(prospect_ser.data)


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def log_entry_detail(req, log_entry_id):
    log_entry = get_object_or_404(LogEntry, id=log_entry_id)
    prospect_ser = ProspectSerializer(log_entry.prospect)
    if req.method == GET:
        ser = LogEntrySerializer(log_entry)
        return Response(ser.data)
    elif req.method == PATCH:
        ser = LogEntrySerializer(log_entry, data=req.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(prospect_ser.data)
    elif req.method == DELETE:
        log_entry.delete()
        return Response(prospect_ser.data, status=status.HTTP_204_NO_CONTENT)
