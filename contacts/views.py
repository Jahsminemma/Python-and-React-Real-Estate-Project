from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail
from rest_framework.response import Response

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage:\n'
                + data['message'],
                "jahsminemma@gmail.com",
                ["jahsminemma@gmail.com"],
                fail_silently=False
            )
            return Response({'success': 'Message sent successfully'})

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()      


        except:
            return Response({'error': 'Message failed to send'})
