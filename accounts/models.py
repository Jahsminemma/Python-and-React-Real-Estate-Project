from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    class AccountType(models.TextChoices):
        AGENT = 'Agent'
        CLIENT = 'Client'
    
    class AccountUsage(models.TextChoices):
        BUY = 'Buy'
        SELL = 'Sell'

    full_name = models.CharField(max_length=200)
    account_type = models.CharField(max_length=50, choices=AccountType.choices, default=AccountType.CLIENT)
    account_usage = models.CharField(max_length=50, choices=AccountUsage.choices, default=AccountUsage.BUY)
    profile_image = models.ImageField(upload_to='photos/%Y/%m/%d/')
    phone_number = models.CharField(max_length=12)
    verification_id = models.CharField(max_length=12)

    
    def __str__(self):
        return self.full_name
