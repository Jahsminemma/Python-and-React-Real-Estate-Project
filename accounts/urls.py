from django.urls import path
from .views import UserViewSet
from rest_framework import routers
from django.urls import path
from .views import UserView, DetailUserView

router = routers.SimpleRouter()

urlpatterns = [
    path("", UserView.as_view()),
    path("<int:pk>", DetailUserView.as_view()),
]
