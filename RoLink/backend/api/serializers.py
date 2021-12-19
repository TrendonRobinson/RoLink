from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Account
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'email', 'username', 'password', 'first', 'last',
                  'date_joined', 'last_login', 'is_admin', 'is_staff']
        read_only_fields = ('id', 'date_joined', 'last_login')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = Account(
            email=validated_data['email'],
            username=validated_data['username'],
            first=validated_data['first'],
            last=validated_data['last'],
            # password=validated_data['password']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    # def create(self, validated_data):
    #     print(self, validated_data)
    #     user = Account.objects.create_user(**validated_data)
    #     Token.objects.create(user=user)
    #     return user


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'email', 'username', 'password']
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         Token.objects.create(user=user)
#         return user
