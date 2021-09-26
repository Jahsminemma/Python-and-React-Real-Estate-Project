from django.contrib import admin
from django.contrib import admin
from .models import Listing, ListingImage


class ListingImageAdmin(admin.StackedInline):
    model = ListingImage

 
@admin.register(Listing)
class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published', 'price', 'list_date', 'agent')
    list_display_links = ('id', 'title')
    list_filter = ('agent', )
    list_editable = ('is_published', )
    search_fields = ('title', 'description', 'address', 'city', 'state', 'zipcode', 'price')
    list_per_page = 25
    inlines = [ListingImageAdmin]
 
    class Meta:
       model = Listing
 
