from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
from authentication.models import User
from django.core.mail import send_mail
from .serializers import (
    ContactSerializer,
    Contact,
    ContactMethodSerializer,
    ContactMethod,
    DateContactSerializer,
    DateContact,
)


@api_view([GET])
@permission_classes([IsAuthenticated])
def user_contacts(req):
    if req.method == GET:
        user_contacts = Contact.objects.filter(creator=req.user)
        ser = ContactSerializer(user_contacts, many=True)
        return Response(ser.data, 200)


@api_view([GET, POST])
@permission_classes([IsAuthenticated])
def date_contacts(req, date_id):
    if req.method == GET:
        date_contacts = DateContact.objects.filter(date_id=date_id)
        ser = DateContactSerializer(date_contacts, many=True)
        return Response(ser.data)
    elif req.method == POST:
        return DateContactSerializer.create_or_update(req, date_id)


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def contact_detail(req, contact_id):
    contact = get_object_or_404(Contact, id=contact_id)
    if req.method == GET:
        ser = ContactSerializer(contact)
        return Response(ser.data)
    elif req.method == PATCH:
        ser = ContactSerializer(contact, data=req.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)
    elif req.method == DELETE:
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view([POST])
@permission_classes([IsAuthenticated])
def methods_table(req, contact_id):
    ContactMethod.objects.create(**req.data, contact_id=contact_id)
    contact = get_object_or_404(Contact, id=contact_id)
    ser = ContactSerializer(contact)
    return Response(ser.data)


@api_view([GET, PATCH, DELETE])
@permission_classes([IsAuthenticated])
def method_detail(req, method_id):
    contact_method = get_object_or_404(ContactMethod, id=method_id)
    contact = get_object_or_404(Contact, id=contact_method.contact.id)
    contact_ser = ContactSerializer(contact)
    if req.method == GET:
        return Response(ContactMethodSerializer(contact_method).data)
    elif req.method == PATCH:
        ser = ContactMethodSerializer(contact_method, data=req.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(contact_ser.data)
    elif req.method == DELETE:
        contact_method.delete()
        return Response(contact_ser.data)


@api_view([GET])
@permission_classes([IsAuthenticated])
def method_options(req):
    data = [method for method, method in ContactMethod.METHODS]
    return Response(data, 200)
