from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
import requests

places_endpoint = "https://maps.googleapis.com/maps/api/place"


@api_view([GET])
@permission_classes([IsAuthenticated])
def autocomplete(req):
    key = req.query_params.get("key")
    query = req.query_params.get("query")
    response = requests.get(f"{places_endpoint}/autocomplete/json?key={key}&input={query}&fields=geometry")
    return Response(response.json())


@api_view([GET])
@permission_classes([IsAuthenticated])
def place_by_text(req):
    key = req.query_params.get("key")
    input = req.query_params.get("input")
    response = requests.get(
        f"{places_endpoint}/findplacefromtext/json?key={key}&inputtype=textquery&input={input}&fields=formatted_address,geometry,name,place_id"
    )
    return Response(response.json())


@api_view([GET])
@permission_classes([IsAuthenticated])
def place_by_id(req):
    key = req.query_params.get("key")
    place_id = req.query_params.get("place_id")
    response = requests.get(
        f"{places_endpoint}/details/json?key={key}&place_id={place_id}&fields=place_id,formatted_address,geometry,name,address_components"
    )
    return Response(response.json())
