from rest_framework import serializers
from contacts.models import Contact, ContactMethod
from .models import DateContact, PlaceContact
from gapi.models import Place
from rest_framework.response import Response


class ContactMethodSerializer(serializers.ModelSerializer):
    contact_id = serializers.CharField(source="contact.id", read_only=True)

    class Meta:
        model = ContactMethod
        exclude = ["contact"]


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        exclude = ["creator"]

    methods = ContactMethodSerializer(many=True)


class DateContactSerializer(serializers.ModelSerializer):
    date_id = serializers.CharField(source="date.id")
    contact = ContactSerializer()

    class Meta:
        model = DateContact
        depth = 1
        exclude = ["date"]

    @staticmethod
    def create_or_update(req, date_id):
        contact, created = Contact.objects.get_or_create(**req.data.get("contact"), creator=req.user)

        date_contact = DateContact.objects.create(date_id=date_id, contact=contact, title=req.data["title"])

        ser = DateContactSerializer(date_contact)

        return Response(ser.data)


class PlaceContactSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()

    class Meta:
        model = PlaceContact
        depth = 1
        fields = "__all__"

    @staticmethod
    def create_or_update(req, place_id):
        contact_data = req.data.get("contact")
        if "methods" in contact_data:
            contact_data.pop("methods")

        contact, created = Contact.objects.get_or_create(**contact_data, creator=req.user)

        place = Place.objects.get(place_id=place_id)

        place_contact = PlaceContact.objects.create(place=place, contact=contact, title=req.data["title"])

        ser = PlaceContactSerializer(place_contact)

        return Response(ser.data, 201)
