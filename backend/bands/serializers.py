from rest_framework import serializers
from authentication.models import User
from bands.models import Band, BandUser
from tours.serializers import TourSerializer
from rest_framework import status
from rest_framework.response import Response
from authentication.serializers import UserSerializer

# BANDUSER SERIALIZER
class  BandUserSerializer(serializers.ModelSerializer):
  def init_users(users, band_id):
     for user in users:
        user, created = User.objects.get_or_create(email=user['email'])
        BandUser.objects.create(band_id=band_id, user=user)

  class Meta:
    model = BandUser
    fields = ['id', 'username', 'email', 'is_admin']

  id = serializers.SerializerMethodField()
  def get_id(self, band_user):
     return band_user.user.id

  email = serializers.SerializerMethodField()
  def get_email(self, band_user):
    return band_user.user.email

  username = serializers.SerializerMethodField()
  def get_username(self, band_user):
    return band_user.user.username
  
  
  # def create(self, validated_data):
  #   # need to create new users if they don't exist
  #   self.get_or_create_user(validated_data)
  #   return super().create(validated_data)
  

  

# BAND SERIALIZER
class BandSerializer(serializers.ModelSerializer):
    tours = TourSerializer(many=True, required=False, read_only=True, source='tour_set')
    users = BandUserSerializer(many=True, read_only=True, source='banduser_set')
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Band
        fields = ['id', 'name', 'tours', 'users', 'owner']
        depth = 1

    def create_band(self, request):
        self.is_valid(raise_exception=True)
        self.save(owner=request.user)
         
        # create band users
        BandUserSerializer.init_users(request.data['users'], self.instance.id)
        return Response(self.data, status=status.HTTP_201_CREATED)
    
    def update_band(self, req):
       self.is_valid(raise_exception=True)
       self.instance.users.clear()
       BandUserSerializer.init_users(req.data['users'], self.instance.id)
       self.save()
       return Response(self.data, status=status.HTTP_200_OK)
