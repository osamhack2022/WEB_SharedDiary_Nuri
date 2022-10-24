from django.db import models
from _core.models import TimestampedModel
# Create your models here.
from accountapp.models import User

OPEN_CHOICES = ((False, '나만 보기'), (True, '전체 공개'))

class Note(TimestampedModel):
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=45, null=True)
    description = models.TextField(max_length=150, blank=False, null=True)
    image = models.ImageField(upload_to='note/', null=True, blank=True)
    to_open = models.BooleanField(default=True, choices=OPEN_CHOICES)

    def __str__(self):
        return self.title
    
    @property
    def writer_pk(self):
        return self.writer.id


class Diary(TimestampedModel):

    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=45, null=True)
    content = models.TextField(blank=False, null=True)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)

    #created_at = models.DateField(auto_now_add=True, null=True)
    #updated_at = models.DateField(auto_now=True, null=True)

    image = models.ImageField(upload_to='diary/', null=True, blank=True)
    to_open = models.BooleanField(default=True, choices=OPEN_CHOICES)

    def __str__(self):
        return self.title
    
    @property
    def writer_pk(self):
        return self.writer.id