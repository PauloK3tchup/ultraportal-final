from django.contrib import admin

from .models import SiteContent


@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    list_display = ('slug', 'title')
    search_fields = ('slug', 'title')
