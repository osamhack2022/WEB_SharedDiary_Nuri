from django.db import models

# Create your models here.
from accountapp.models import User

OPEN_CHOICES = ((False, '나만 보기'), (True, '전체 공개'))
class Note(models.Model):
    pass
    
class Diary(models.Model):
    writer = model.ForeignKey(User, on_delete=models.CASCADE)
    title = model.CharField(max_length=45, null=True)
    content = models.TextField(blank=False, null=True)

    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now=True, null=True)

    image = models.ImageField(upload_to='diary/', null=True)
    to_open = models.BooleanField(default=True, choices=OPEN_CHOICES)