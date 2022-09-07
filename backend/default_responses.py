from constants import *
from rest_framework.response import Response
from rest_framework import status

def put_default(request, instance, model_serializer):
  serializer = model_serializer(instance, data=request.data, partial=True)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def get_view(request, instance, model_serializer):
  pass