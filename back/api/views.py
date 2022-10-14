from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import PollCard, PollCardOption, VotedUser
from .serializers import PollCardSerializer, UserSerializer
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
#===================================
from pymongo import MongoClient
from pymongo import *
import json
from bson import ObjectId
from bson.json_util import dumps
# p=vteieEelQNQ0fwy2
client = MongoClient("mongodb+srv://gaurav200203:TlbmRUEw78dNJRt1@cluster0.xlazjws.mongodb.net/?retryWrites=true&w=majority",connect=False )
db = client['poll-app']
collection1 = db['pollcards']
collection2 = db['polloptions']
collection3 = db['users']
def parse_json(data):
    return json.loads(dumps(data))
#=======================================
@api_view(['GET'])
def index(request):
    return HttpResponse(["hello bhai"])

@api_view(['GET'])
def usersData(request):
    rawData = User.objects.all()
    serializedData = UserSerializer(rawData,many = True)
    return Response(serializedData.data)

@api_view(['GET'])
def pollsData(request):
    res =[]
    a = collection1.find()
    a = list(a)
    for i in range(len(a)):
        obj = a[i]
        obj['options'] = []
        # print(type(obj['_id']))
        d = collection2.find({'pCardId':obj['_id']})
        d = list(d)
        for j in range(len(d)):
            innerObj = d[j]
            innerObj['users'] = []
            #==============Fetching Users================
            optionId = innerObj['_id']
            userData = list(collection3.find({'optionCardId':optionId})) 
            # print(userData)
            for k in range(len(userData)):
                nestedInnerObj = userData[k]
                innerObj['users'].append(nestedInnerObj)
                nestedInnerObj['_id']= str(nestedInnerObj['_id'])
                nestedInnerObj['optionCardId']= str(nestedInnerObj['optionCardId'])
            #============================================
            obj['options'].append(innerObj)
            #--------------------------------------
            innerObj['_id'] = str(innerObj['_id'])
            innerObj['pCardId'] = str(innerObj['pCardId'])
            #--------------------------------------
        res.append(obj)
        obj['_id'] = str(obj['_id'])
    #-----------------------------------
    # return Response(parse_json(res))
    return Response(res)
    # rawData = Poll.objects.all()
    # serializedData = PollSerialzers(rawData,many = True)
    # return Response(serializedData.data)

#------------------------------
#fetching from mysql
@api_view(['GET'])
def getMysqlPollData(request):
    rawData = PollCard.objects.all()
    serializedData = PollCardSerializer(rawData,many = True)
    return Response(serializedData.data)
#------------------------------

@api_view(['POST'])
def createPoll(request):
    obj = request.data
    pCard = PollCard.objects.create(
        title = obj['pollQuestion']
    )
    pCard.save()
    # print(obj)
    for optionIndex in obj['options']:
        pOption = PollCardOption.objects.create(
            pCardId = pCard,
            optionTitle = obj['options'][optionIndex]
        )
        pOption.save()
    #------mongodb------------------
    #------removed------------------
    # pCard = {
    #     "title" : obj['pollQuestion'],
    #     "createdBy" : "Gaurav",
    # }
    # pid = collection1.insert_one(pCard).inserted_id
    # for option in obj['options']:
    #     pOption = {
    #         "pCardId" : pid,
    #         "optionTitle" : obj['options'][option]
    #     }
    #     collection2.insert_one(pOption)
    return Response({"message":"success"})
@api_view(['POST'])
def updatePoll(request):
    obj = request.data
    # print(obj)
    pollOptionId = obj['pollOptionId']
    createdOption = PollCardOption.objects.filter(
        _id = pollOptionId
    )[0]
    votedUserObj = VotedUser.objects.create(
        votedOption = createdOption
    )
    #-----------mongodb---------------
    # pollOptionId = obj['pollOptionId']
    # userObj = {
    #     "optionCardId": ObjectId(pollOptionId),
    #     "userName" : "bot"
    # }
    # collection3.insert_one(userObj)
    return Response({"message":"success"})

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
    return Response({"message":"success"})