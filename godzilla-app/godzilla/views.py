from django.shortcuts import render

# Create your views here.
from dataclasses import dataclass 
from django.http import HttpResponse
from .models import Kaiju
from django.views.generic.edit import CreateView

def home(request):
    return HttpResponse('<h1>Kaiju</h1>')


def about(request):
    return render(request, 'about.html')

def kaiju_index(request):
    kaijus = Kaiju.objects.all()
    return render(request, 'kaijus/index.html', { 'kaijus': kaijus})

    
def kaiju_detail(request, kaiju_id):
    kaiju = Kaiju.objects.get(id=kaiju_id)
    return render(request, 'kaijus/detail.html', {'kaiju': kaiju})
