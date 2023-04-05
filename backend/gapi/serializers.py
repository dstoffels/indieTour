class PlaceSerializer:
    def __init__(self, data):
        self.place_id = data.get("place_id")
        self.name = data.get("name")
        self.formatted_address = data.get("formatted_address")

        location = data.get("geometry").get("location")
        self.lat = location.get("lat")
        self.lng = location.get("lng")

        self.data = {
            "place_id": self.place_id,
            "name": self.name,
            "formatted_address": self.formatted_address,
            "lat": self.lat,
            "lng": self.lng,
        }
