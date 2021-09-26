from django.db import models
from django.db import models
from django.utils.timezone import now
from accounts.models import User

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
    
    class HomeType(models.TextChoices):
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'Townhouse'

    agent = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    sale_type = models.CharField(max_length=50, choices=SaleType.choices, default=SaleType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=50, choices=HomeType.choices, default=HomeType.HOUSE)
    sqft = models.IntegerField()
    main_image = models.ImageField(upload_to='photos/%Y/%m/%d/')
    featured_listing = models.BooleanField(default=False)
    special_deal = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title

class ListingImage(models.Model):
    listing_image = models.ImageField(upload_to='photos/%Y/%m/%d/',null=True)
    listing = models.ForeignKey(Listing ,on_delete=models.CASCADE, related_name="listing_images",null=True,blank=True)
    