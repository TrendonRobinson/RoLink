from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Account
from .serializers import UserSerializer

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = UserSerializer


def logout_view(request):
    logout()
    return '/home'


def login_view(request):

    context = {}
