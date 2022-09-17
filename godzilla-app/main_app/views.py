from django.shortcuts import render, redirect
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .models import Kaiju
from .serializers import KaijuSerializer
from django.contrib.auth import login
from django.contrib import messages
User = get_user_model()

# Create your views here.

class KaijuView(viewsets.ModelViewSet):
    serializer_class = KaijuSerializer
    queryset = Kaiju.objects.all()