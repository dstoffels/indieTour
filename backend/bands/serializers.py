from rest_framework import serializers
from authentication.models import User
from bands.models import Band, BandUser
from tours.models import Tour
from tours.serializers import TourSerializer

class BandSerializer(serializers.ModelSerializer):
  class Meta:
    model = Band
    fields = ['name', 'tours', 'users']
    depth = 0

  tours = serializers.SerializerMethodField()

  def get_tours(self, band):
    band_tours = Tour.objects.filter(band_id=band.id)
    serializer = TourSerializer(band_tours, many=True)
    return serializer.data

  def add_users_to_band(self, request):
    for user in request.data['users']:
      try:
        band_user = User.objects.get(email=user['email'])
        BandUser.objects.create(band_id=self.instance.id, user=band_user, is_admin=user['is_admin'])
      except:
        password = User.objects.make_random_password()
        new_user = User.objects.create(email=user['email'], password=password)
        # TODO email new user 
        # setup SMTP hosting in settings
        # (EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) 
        # (EMAIL_USE_TLS/EMAIL_USE_SSL)
        # send_mail(f'INDIETOUR: You\'ve been added to {band.name}',)

  def remove_users_from_band(self, request):
    pass

