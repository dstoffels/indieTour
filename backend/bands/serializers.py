from rest_framework import serializers
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

