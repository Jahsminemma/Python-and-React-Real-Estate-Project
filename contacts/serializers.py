from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    email = serializers.CharField(max_length=100)
    subject = serializers.CharField(max_length=100)
    message = serializers.CharField(max_length=1000)

    class Meta:
        model = Contact
        fields = ('name','email', 'subject','message', )