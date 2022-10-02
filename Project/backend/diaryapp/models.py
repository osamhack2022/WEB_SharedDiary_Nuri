from django.db import models
from _core.models import TimestampedModel
# Create your models here.
from accountapp.models import User

OPEN_CHOICES = ((False, '나만 보기'), (True, '전체 공개'))
class Note(models.Model):
    pass
    
class Diary(TimestampedModel):
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=45, null=True)
    content = models.TextField(blank=False, null=True)

    #created_at = models.DateField(auto_now_add=True, null=True)
    #updated_at = models.DateField(auto_now=True, null=True)

    image = models.ImageField(upload_to='diary/', null=True, blank=True)
    to_open = models.BooleanField(default=True, choices=OPEN_CHOICES)