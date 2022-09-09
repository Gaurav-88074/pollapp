from unicodedata import name
from django.contrib import admin
from django.urls import path
from api import views
#jwt
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

    

urlpatterns = [
    path('', views.index,name = "defaultPage"),
    path('users',views.usersData,name = "usersData"),
    path('polls',views.pollsData,name = "pollsData"),
    path('create',views.createPoll,name = "createPoll"),

    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('signup',views.signup,name = "signup")
]