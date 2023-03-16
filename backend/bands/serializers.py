from rest_framework import serializers
from authentication.models import User
from bands.models import Band, BandUser
from tours.serializers import TourSerializer
from rest_framework import status
from rest_framework.response import Response
from authentication.serializers import UserSerializer
from .band_user_serializer import BandUserSerializer

# BAND SERIALIZER
class BandSerializer(serializers.ModelSerializer):
    tours = TourSerializer(many=True, required=False, read_only=True, source='tour_set')
    users = BandUserSerializer(many=True, read_only=True, source='banduser_set')
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Band
        fields = ['id', 'name', 'owner', 'tours', 'users']
        depth = 1

    def create_band(self, request):
        self.is_valid(raise_exception=True)
        self.save(owner=request.user)
         
        # create band users
        BandUserSerializer.create_or_update(request.data['users'], self.instance.id)
        return Response(self.data, status=status.HTTP_201_CREATED)
    
    def update_band(self, req):
       self.is_valid(raise_exception=True)
    #    self.instance.users.clear()
       BandUserSerializer.create_or_update(req.data['users'], self.instance.id)
       self.save()
       return Response(self.data, status=status.HTTP_200_OK)
