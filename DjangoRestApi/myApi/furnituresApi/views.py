from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Furnitures,Category
from .serializers import FurnituresSerializer,CategoriesSeriallizer,UserSerializer
from rest_framework import generics
from rest_framework import status
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework import viewsets

# Create your views here.

def index(request):
    return render(request,"index.html")


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer



class CategoriesList(APIView):

    def get(self,request,format=None):
        categories = Category.objects.all()
        serializer = CategoriesSeriallizer(categories,many = True)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = CategoriesSeriallizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CategoriesCRUD(APIView):
    
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        key = self.get_object(pk)
        serializer = CategoriesSeriallizer(key)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        key = self.get_object(pk)
        serializer = CategoriesSeriallizer(key)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk,format=None):
        key = self.get_object(pk)
        key.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class FurnituresList(APIView):

    def get(self,request,format=None):
        furnitures = Furnitures.objects.all()
        serializer = FurnituresSerializer(furnitures,many = True)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = FurnituresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class FurnituresCRUD(APIView):
    
    def get_object(self, pk):
        try:
            return Furnitures.objects.get(pk=pk)
        except Furnitures.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        key = self.get_object(pk)
        serializer = FurnituresSerializer(key)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        key = self.get_object(pk)
        serializer = FurnituresSerializer(key)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk,format=None):
        key = self.get_object(pk)
        key.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)