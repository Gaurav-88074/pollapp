from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class PollCard(models.Model):
    _id = models.AutoField(primary_key=True,editable=False)
    title = models.CharField(max_length=200,null =True,blank=True)
    createdBy = models.ForeignKey(User,on_delete= models.SET_NULL,null=True)
    def __str__(self) -> str:
        return f"{self.title}"
class PollCardOption(models.Model):
    _id = models.AutoField(primary_key=True,editable=False)
    optionTitle = models.CharField(max_length=200,null =True,blank=True)
    pCardId = models.ForeignKey(PollCard,on_delete= models.SET_NULL,null=True)
    def __str__(self) -> str:
        return f"{self.optionTitle}"
class VotedUser(models.Model):
    _id = models.AutoField(primary_key=True,editable=False)
    votedUser = models.ForeignKey(User,on_delete= models.SET_NULL,null=True)
    votedOption=models.ForeignKey(PollCardOption,on_delete= models.SET_NULL,null=True)
    
