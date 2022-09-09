from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import  ProfileSerialzers
from .serializers import  PollSerialzers
from .models import  Profile
from .models import  Poll
from .models import  VoteOption
# Create your views here.
#----------------------
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username']=self.user.username
        data['email']=self.user.email

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
#----------------------
@api_view(['GET'])
def index(request):
    return HttpResponse(["hello bhai"])

@api_view(['GET'])
def usersData(request):
    rawData = Profile.objects.all()
    serializedData = ProfileSerialzers(rawData,many = True)
    return Response(serializedData.data)

@api_view(['GET'])
def pollsData(request):
    rawData = Poll.objects.all()
    serializedData = PollSerialzers(rawData,many = True)
    return Response(serializedData.data)
@api_view(['POST'])
def createPoll(request):
    obj = request.data
    options = obj['options']
    pollQuestion = obj['pollQuestion']
    pollInstance = Poll(pollQuestion=pollQuestion)
    pollInstance.save()
    for i in options.values():
        voteInstance = VoteOption(voteStatement=i,voteValue=1)
        voteInstance.save()
        pollInstance.option.add(voteInstance)
    return Response({"name":"gaurav"})

@api_view(['POST'])
def signup(request):
    obj = request.data
    obj = obj['data']
    username = obj['username']
    name = username.split(" ")
    first_name = None
    last_name = None
    if len(name)==1:
        first_name = username
        last_name = ""
    else:
        first_name = name[0]
        last_name = name[1]
    email = obj['email']
    passwordRaw = obj['password']
    password = make_password(passwordRaw)
    user = User.objects.create(
        first_name = first_name,
        username = username,
        last_name = last_name,
        email = email,
        password = password,
    )
    user.save()
    return Response({"name":"gaurav"})