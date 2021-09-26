from rest_framework import viewsets
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserView(ListAPIView):
    queryset = User.objects.order_by('-id')
    serializer_class = UserSerializer

class DetailUserView(RetrieveAPIView):
    queryset = User.objects.order_by('-id')
    serializer_class = UserSerializer