from django.db import models

# Create your models here.
class Kaiju(models.Model):
    name = models.CharField(max_length=120)
    japanese_name = models.CharField(max_length=120)
    species = models.CharField(max_length=120)
    height = models.CharField(max_length=120)
    length = models.CharField(max_length=120)
    weight = models.CharField(max_length=120)
    noise = models.TextField(default='No Audio')
    picture = models.TextField( default='No Image')
    description = models.TextField()
    

    def _str_(self):
        return self.name