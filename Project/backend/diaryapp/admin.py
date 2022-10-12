from django.contrib import admin

from diaryapp.models import Diary, Note
# Register your models here.

admin.site.register(Diary)
admin.site.register(Note)