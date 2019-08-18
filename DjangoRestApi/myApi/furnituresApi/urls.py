
from .views import FurnituresList,FurnituresCRUD,CategoriesList,CategoriesCRUD
from django.urls import path,include
from furnituresApi import views
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('',views.index),
    path('categories/',views.CategoriesList.as_view(), name = "categories"),
    path('categories/<int:pk>',views.CategoriesCRUD.as_view(), name = "categories"),
    path('furnitures/',views.FurnituresList.as_view(), name = "furnitures"),
    path('furnitures/<int:pk>/',views.FurnituresCRUD.as_view(), name = "furnitures"),   
    path('auth/', ObtainAuthToken.as_view()),
]

