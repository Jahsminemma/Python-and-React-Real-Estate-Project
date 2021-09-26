from allauth.account.adapter import get_adapter
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('full_name','email','password', 'account_type', 'account_usage','profile_image', 'phone_number', 'verification_id',)


class CustomRegisterSerializer(RegisterSerializer):
    full_name = serializers.CharField()
    account_type= serializers.CharField()
    account_usage = serializers.CharField()
    profile_image = serializers.ImageField()
    phone_number = serializers.CharField()
    verification_id = serializers.CharField()


    class Meta:
        model = User
        fields = ('full_name','email', 'password', 'account_type', 'account_usage','profile_image', 'phone_number', 'verification_id',)

    def get_cleaned_data(self):
        return {
            'full_name': self.validated_data.get('full_name', ''),
            'email': self.validated_data.get('email', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'account_type': self.validated_data.get('account_type', ''),
            'account_usage': self.validated_data.get('account_usage', ''),
            'profile_image': self.validated_data.get('profile_image', ''),
            'phone_number': self.validated_data.get('phone_number', ''),
            'verification_id': self.validated_data.get('verification_id', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.full_name = self.cleaned_data.get('full_name')
        user.account_type = self.cleaned_data.get('account_type')
        user.account_usage = self.cleaned_data.get('account_usage')
        user.profile_image = self.cleaned_data.get('profile_image')
        user.phone_number = self.cleaned_data.get('phone_number')
        user.verification_id = self.cleaned_data.get('verification_id')
        user.save()
        adapter.save_user(request, user, self)
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()
   
    class Meta:
        model = Token
        fields = ('key', 'user', 'user_type',)
        

    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data
        account_type = serializer_data.get('account_type')
        full_name = serializer_data.get('full_name')
        
        return {
           "account_type": account_type,
           "full_name": full_name
        }