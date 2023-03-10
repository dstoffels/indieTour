from django.db import models
from django.contrib.auth.models import AbstractUser
    
class User(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password', 'username']
    active_band = models.IntegerField(null=True)
    active_tour = models.IntegerField(null=True)
    '''
    This is a custom version of the built in User class
    It contains all of the built in fields and functionality of the standard User
    You can add fields here for any additional properties you want a User to have
    This is useful for adding roles (Customer and Employee, for example)
    For just a few roles, adding boolean fields is advised
    '''
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)

    def set_active_band(self,band_id):
        self.active_band_id = band_id
        self.save()
    
    def set_active_tour(self, tour_id):
        self.active_tour_id = tour_id
        self.save()
