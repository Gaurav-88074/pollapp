from django.contrib import admin
from .models import PollCard
from .models import PollCardOption
from .models import VotedUser

admin.site.register(PollCard)
admin.site.register(PollCardOption)
admin.site.register(VotedUser)
# Register your models here.
