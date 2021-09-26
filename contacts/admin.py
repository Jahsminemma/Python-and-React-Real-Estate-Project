from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject','contact_date' )
    list_display_links = ('email', 'subject')
    list_filter = ('email', )
    search_fields = ('name', 'email', 'subject')
    list_per_page = 25
 
    class Meta:
       model = Contact
 