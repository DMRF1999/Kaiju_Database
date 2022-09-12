from django.contrib import admin
from .models import Kaiju

class GodzillaAdmin(admin.ModelAdmin):
    list_display = ('name', 'japanese_name', 'species', 'height', 'length', 'weight', 'noise','picture', 'description')
# Register your models here.
admin.site.register(Kaiju, GodzillaAdmin)