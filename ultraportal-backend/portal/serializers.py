from rest_framework import serializers

from .models import SiteContent


class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = ['slug', 'title', 'subtitle', 'description', 'content']
