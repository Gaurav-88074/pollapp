from django.contrib import admin
from .models import Profile
from .models import Poll
from .models import VoteOption

admin.site.register(Profile)
admin.site.register(Poll)
admin.site.register(VoteOption)
# Register your models here.
