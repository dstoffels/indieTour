from rest_framework import serializers
from authentication.models import User
from bands.models import Band, BandUser
from tours.models import Tour
from tours.serializers import TourSerializer
from rest_framework import status
from rest_framework.response import Response

class BandUserSerializer(serializers.ModelSerializer):
  email = serializers.SerializerMethodField()
  username = serializers.SerializerMethodField()

  def get_email(self, band_user):
    return band_user.user.email

  def get_username(self, band_user):
    return band_user.user.username

  class Meta:
    model = BandUser
    fields = ['email', 'username', 'is_admin', 'is_owner']
    depth = 1

class BandSerializer(serializers.ModelSerializer):
  class Meta:
    model = Band
    fields = ['id', 'name', 'is_archived', 'tours', 'users' ]
    depth = 1

  tours = serializers.SerializerMethodField()
  users = serializers.SerializerMethodField()

  def get_tours(self, band):
    band_tours = Tour.objects.filter(band_id=band.id)
    serializer = TourSerializer(band_tours, many=True)
    return serializer.data

  def get_users(self, band):
    band_users = BandUser.objects.filter(band_id=band.id)
    serializer = BandUserSerializer(band_users, many=True)
    return serializer.data

  def create_band(self, request):
    if self.is_valid():
      self.save()
       # add owner
      BandUser.objects.create(band_id=self.instance.id, user_id=request.user.id, is_admin=True, is_owner=True)
      self.__update_band_users(request)
      return Response(self.data, status=status.HTTP_201_CREATED)
    return Response(self.errors, status=status.HTTP_400_BAD_REQUEST)

  def update_band(self, request):
    if self.is_valid():
      self.save()
      self.__update_band_users(request)
      self.__remove_users_from_band(request)
      return Response(self.data, status=status.HTTP_201_CREATED)
    return Response(self.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete_band(self, request, band_id):
    band_user = BandUser.objects.get(user_id=request.user.id, band_id=band_id)
    if band_user.is_owner:
      self.instance.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response({"unauthorized": "Only the band owner may delete a band"}, status=status.HTTP_401_UNAUTHORIZED)

  def __update_band_users(self, request):
    current_users = BandUser.objects.filter(band_id=self.instance.id)
    for user in request.data['users']:
      email = user['email']
      if email not in current_users.values_list('user__email', flat=True):
        band_user = None
        try:
          band_user = User.objects.get(email=user['email'])
        except:
          password = User.objects.make_random_password()
          print(password)
          band_user = User.objects.create(email=user['email'])
          band_user.set_password(password)
          band_user.save()
        BandUser.objects.create(band_id=self.instance.id, user=band_user, is_admin=user['is_admin'])
          # TODO email new user 
          # setup SMTP hosting in settings
          # (EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) 
          # (EMAIL_USE_TLS/EMAIL_USE_SSL)
          # send_mail(f'INDIETOUR: You\'ve been added to {band.name}',)
      else:
        current_user = current_users.get(user__email=email)
        if current_user.is_admin is not user['is_admin']:
          current_user.is_admin=user['is_admin']
          current_user.save()
        

  def __remove_users_from_band(self, request):
    current_users = BandUser.objects.filter(band_id=self.instance.id)
    for current_user in current_users.all():
      will_delete = True
      if current_user.is_owner:
        will_delete = False
      for user in request.data['users']:
        if user['email'] == current_user.user.email:
          will_delete = False
      if will_delete: 
        current_user.delete()

      


