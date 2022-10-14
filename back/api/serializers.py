from django.db import models
from django.db.models import fields
from pyexpat import model
from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField

from django.contrib.auth.models import User
from .models import PollCard
from .models import PollCardOption
from .models import VotedUser

#---------------------------------------------------------
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model  =  User
        fields = ['username','id']
        # fields = '__all__'
class VotedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model  =  VotedUser
        fields = '__all__'

class PollCardOptionSerializer(serializers.ModelSerializer):
    users = SerializerMethodField()
    class Meta:
        model  =  PollCardOption
        fields = '__all__'
    def get_users(self,obj):
        data = obj.voteduser_set.all()
        serializer = VotedUserSerializer(data,many=True)
        return serializer.data
class PollCardSerializer(serializers.ModelSerializer):
    options  = SerializerMethodField()
    createdBy  = UserSerializer(many=False)
    class Meta:
        model  =  PollCard
        fields = '__all__'
    def get_options(self,obj):
        data = obj.pollcardoption_set.all()
        serializer = PollCardOptionSerializer(data,many=True)
        return serializer.data
    