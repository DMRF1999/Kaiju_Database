from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False

# Create your models here.
class Kaiju(models.Model):
    name = models.CharField(max_length=120)
    japanese_name = models.CharField(max_length=120)
    species = models.CharField(max_length=120)
    height = models.CharField(max_length=120)
    length = models.CharField(max_length=120)
    weight = models.CharField(max_length=120)
    noise = models.FileField(upload_to='noise')
    picture = models.FileField(upload_to='picture')
    description = models.TextField()
    

    def _str_(self):
        return self.name