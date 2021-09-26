from django.contrib import admin
from .models import User
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {
            'fields': ('full_name','email', 'password', 'account_type', 'account_usage','profile_image', 'phone_number', 'verification_id',)
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    list_display = ['full_name','email', 'password', 'account_type', 'account_usage', 'phone_number', 'verification_id']
    search_fields = ('email', 'full_name')
    ordering = ('email',)



admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
