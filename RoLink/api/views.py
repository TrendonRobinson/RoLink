from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from rest_framework import generics
from .serializers import ProductSerializer
from .models import Product


# Create your views here.
class ProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
