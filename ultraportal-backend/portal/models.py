from django.db import models


class SiteContent(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    subtitle = models.TextField(blank=True)
    description = models.TextField(blank=True)
    content = models.JSONField(default=dict, blank=True)

    class Meta:
        verbose_name = 'Site content'
        verbose_name_plural = 'Site content'

    def __str__(self):
        return self.slug
