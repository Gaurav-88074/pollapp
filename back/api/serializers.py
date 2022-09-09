
from dataclasses import field
from .models import Profile
from .models import Poll
from .models import VoteOption
from rest_framework import serializers
from django.db.models import fields
from rest_framework.serializers import SerializerMethodField
class ProfileSerialzers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        # fields  = '__all__'
        fields  = ['id','username']
#---------------------------------------------------------
class VoteOptionSerialzers(serializers.ModelSerializer):
    votedUser = ProfileSerialzers(many=True)
    class Meta:
        model = VoteOption
        fields  = '__all__'
    def get_voteduser(self,obj):
        votedUser = obj.profile_set.all()
        serializered = ProfileSerialzers(votedUser,many =True)
        return serializered.data
#---------------------------------------------------------
class PollSerialzers(serializers.ModelSerializer):
    option = VoteOptionSerialzers(many = True)
    class Meta:
        model = Poll
        fields  = '__all__'
    def get_voteoption(self,obj):
        option = obj.voteoption_set.all()
        serializered = VoteOptionSerialzers(option,many =True)
        return serializered.data