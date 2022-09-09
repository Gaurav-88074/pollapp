from pyexpat import model
from django.db import models

# Create your models here.
class Profile(models.Model):

    username = models.CharField(max_length=20,null =True,blank=True)
    # profilePhoto  = models.ImageField()
    phoneNumber = models.IntegerField(null=True,blank = True)
    emailId = models.CharField(max_length=20,null =True,blank=True)

    def __str__(self):
        return f"{self.username} : {self.phoneNumber}"

class VoteOption(models.Model):
    voteStatement=models.CharField(max_length = 100,blank=True,null=True)
    voteValue = models.IntegerField(blank=True,null=True,default=0)
    votedUser = models.ManyToManyField(Profile,null=True,blank=True)
    def __str__(self):
        return f"{self.voteStatement}"
        
class Poll(models.Model):
    # users =models.ForeignKey(Profile,on_delete=models.CASCADE)
    pollQuestion  =models.CharField(max_length = 100,blank=True,null=True)
    option = models.ManyToManyField(VoteOption,null=True,blank=True)

    def __str__(self):
        return f"{self.pollQuestion}"
    

    