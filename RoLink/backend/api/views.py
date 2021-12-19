from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Account
from django.shortcuts import render
from .serializers import UserSerializer

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = UserSerializer
