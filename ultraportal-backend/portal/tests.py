from django.test import TestCase
from django.urls import reverse


class SiteContentApiTests(TestCase):
    def test_site_content_endpoint_returns_sections(self):
        response = self.client.get(reverse('site-content'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('hero', response.json())
        self.assertIn('about', response.json())
        self.assertIn('strategies', response.json())
        self.assertIn('speedrun', response.json())
        self.assertIn('demo', response.json())
        self.assertIn('footer', response.json())
