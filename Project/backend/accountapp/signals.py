from accountapp.models import User, Profile
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    print("Created:", created)    # 새롭게 객체 생성되면 True, 아니면 False

    if created:
        Profile.objects.create(user=instance)