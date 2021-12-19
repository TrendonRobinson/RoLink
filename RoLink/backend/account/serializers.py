from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Account
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'email', 'username', 'password', 'first', 'last',
                  'date_joined', 'last_login', 'is_admin', 'is_staff']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    # def create(self, validated_data):
    #     print(self, validated_data)
    #     user = Account.objects.create_user(**validated_data)
    #     Token.objects.create(user=user)
    #     return user
