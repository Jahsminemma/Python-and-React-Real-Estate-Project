from rest_framework import serializers
from .models import Listing, ListingImage
from accounts.models import User


class ListingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingImage
        fields = ('listing_image',)

class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('full_name', 'phone_number','email', 'profile_image')


class ListingSerializer(serializers.ModelSerializer):
    listing_images = serializers.SerializerMethodField('get_listing_images')
    agent = serializers.SerializerMethodField('get_agent')

    class Meta:
        model = Listing
        fields = ('id', 'title', 'agent','address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'main_image', 'special_deal', 'featured_listing', 'listing_images',)

    def get_listing_images(self, obj):
        listing_images = ListingImageSerializer(obj.listing_images.all(), many=True).data
        merged_images = []
        
        for d in listing_images:
            listing_image = d['listing_image']
            merged_images.extend([self.context.get('request').build_absolute_uri(listing_image)])

        return merged_images

    def get_agent(self, obj):
        agent = AgentSerializer(obj.agent, many=False).data
        return agent



class listingDetailSerializer(serializers.ModelSerializer):
    agent = serializers.SerializerMethodField('get_agent')
    listing_images = serializers.SerializerMethodField('get_listing_images')

    class Meta:
        model = Listing
        fields =  ('id','title', 'agent','address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft','special_deal', 'featured_listing', 'main_image', 'listing_images',)
        lookup_field = 'id'

    def get_listing_images(self, obj):
        listing_images = ListingImageSerializer(obj.listing_images.all(), many=True).data
        request = self.context.get('request')
        merged_images = []
        
        for d in listing_images:
            listing_image = d['listing_image']
            image_url = request.build_absolute_uri(listing_image)
            merged_images.extend([image_url])

        return merged_images

    def get_agent(self, obj):
        agent = AgentSerializer(obj.agent, many=False).data
        full_name = agent.get('full_name')
        phone_number= agent.get('phone_number')
        email= agent.get('email') 
        profile_image = self.context.get('request').build_absolute_uri(agent.get('profile_image'))
  

        return {
            "full_name": full_name,
            "phone_number": phone_number,
            "email": email,
            "profile_image": profile_image
        }

