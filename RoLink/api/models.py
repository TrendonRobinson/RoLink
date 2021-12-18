from django.db import models

# Create your models here.


class Product(models.Model):
    description = models.CharField(max_length=150, default="")
    test = models.BooleanField(default=False)
