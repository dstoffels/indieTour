from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from constants import *
import requests

@api_view([GET])
@permission_classes([IsAuthenticated])
def autocomplete(req):
    places_endpoint = 'https://maps.googleapis.com/maps/api/place'
    key = req.query_params.get('key')
    query = req.query_params.get('query')
    response = requests.get(f'{places_endpoint}/autocomplete/json?key={key}&input={query}')
    return Response(response.json())

@api_view([GET])
@permission_classes([IsAuthenticated])
def places(req):
    places_endpoint = 'https://maps.googleapis.com/maps/api/place'
    key = req.query_params.get('key')
    input = req.query_params.get('input')
    response = requests.get(f'{places_endpoint}/findplacefromtext/json?key={key}&inputtype=textquery&input={input}&fields=formatted_address%2Cgeometry%2Cname')
    return Response(response.json())

