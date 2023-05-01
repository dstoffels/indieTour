from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
import requests
import os
from dotenv import load_dotenv

load_dotenv()
key = os.getenv("GOOGLE_API_KEY")

maps_endpoint = "https://maps.googleapis.com/maps/api"


@api_view([GET])
@permission_classes([IsAuthenticated])
def autocomplete(req):
    query = req.query_params.get("query")
    response = requests.get(f"{maps_endpoint}/place/autocomplete/json?key={key}&input={query}&fields=geometry")
    return Response(response.json())


@api_view([GET])
@permission_classes([IsAuthenticated])
def place_by_text(req):
    input = req.query_params.get("input")
    response = requests.get(
        f"{maps_endpoint}/place/findplacefromtext/json?key={key}&inputtype=textquery&input={input}&fields=formatted_address,geometry,name,place_id"
    )
    return Response(response.json())


@api_view([GET])
@permission_classes([IsAuthenticated])
def place_by_id(req):
    place_id = req.query_params.get("place_id")
    response = requests.get(
        f"{maps_endpoint}/place/details/json?key={key}&place_id={place_id}&fields=place_id,formatted_address,geometry,name,address_components"
    )
    return Response(response.json())


@api_view([GET])
@permission_classes([IsAuthenticated])
def directions(req):
    origin = req.query_params.get("origin")
    destination = req.query_params.get("destination")
    arrival_time = req.query_params.get("arrival_time")
    response = requests.get(
        f"{maps_endpoint}/directions/json?key={key}&origin=place_id:{origin}&destination=place_id:{destination}"
    )
    return Response(response.json())


# @api_view([POST, GET])
# @permission_classes([IsAuthenticated])
# def place_contacts(req, place_id):
#     if req.method == POST:
#         place_contact =
