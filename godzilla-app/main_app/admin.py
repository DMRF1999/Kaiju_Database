from django.contrib import admin
from .models import Kaiju

class main_appAdmin(admin.ModelAdmin):
    list_display = ('name', 'japanese_name', 'species', 'height', 'length', 'weight', 'noise','picture', 'description')
# Register your models here.
admin.site.register(Kaiju, main_appAdmin)