from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Furnitures,Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only':True, 'required':True}}
    
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class FurnituresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furnitures
        fields = ('pk','name', 'material','price','image','category','description')

class CategoriesSeriallizer(serializers.ModelSerializer):
    class Meta:
        model =Category
        fields=('pk','name')
