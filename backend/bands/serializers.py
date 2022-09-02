from rest_framework import serializers
from bands.models import Band
from tours.models import Tour
from tours.serializers import TourSerializer

class BandSerializer(serializers.ModelSerializer):
  class Meta:
    model = Band
    fields = ['name', 'owner_id', 'tours']
    depth = 2

  tours = serializers.SerializerMethodField()

  def get_tours(self, obj):
    band_tours = Tour.objects.filter(band_id=obj.id)
    serializer = TourSerializer(band_tours, many=True)
    return serializer.data