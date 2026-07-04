from rest_framework.response import Response
from rest_framework.views import APIView

from .models import SiteContent
from .serializers import SiteContentSerializer


class SiteContentView(APIView):
    def _seed_default_content(self):
        defaults = [
            {
                'slug': 'hero',
                'title': 'ULTRAPORTAL',
                'subtitle': 'Aprenda a decimar o inferno com estilo!',
                'content': {},
            },
            {
                'slug': 'about',
                'title': 'Mas sobre o que é o jogo?',
                'subtitle': 'ULTRAKILL é um jogo de ação FPS que mistura velocidade, estilo e violência em um gameplay frenético.',
                'description': "ULTRAKILL é um jogo de ação FPS old school criado por Arsi 'Hakita' Patala e distribuído pela New Blood Interactive.",
                'content': {},
            },
            {
                'slug': 'strategies',
                'title': 'Principais Estratégias',
                'content': [
                    {'title': 'Moedas'},
                    {'title': 'Movimentação'},
                    {'title': 'Outras'},
                ],
            },
            {
                'slug': 'speedrun',
                'title': 'Recordes atuais de speedruns',
                'subtitle': 'Speedrun.com',
                'description': 'A plataforma speedrun.com reúne jogadores que compartilham e competem por recordes em ULTRAKILL.',
                'content': {},
            },
            {
                'slug': 'demo',
                'title': 'Gostou do jogo? Experimente a demo!',
                'content': {
                    'label': '>>> devilmayquake.com <<<',
                    'link': 'https://devilmayquake.com/',
                },
            },
            {
                'slug': 'footer',
                'title': 'ULTRAPORTAL',
                'description': 'Este projeto é feito de fã para fã e é totalmente sem fins lucrativos.',
                'content': {
                    'phone': '+55 (47) 99210-8335',
                    'email': 'paulocesarifc@gmail.com',
                    'github': 'https://github.com/PauloK3tchup/ultraportal.git',
                    'instagram': 'https://www.instagram.com/paulok3tchup/',
                },
            },
        ]

        for item in defaults:
            SiteContent.objects.get_or_create(slug=item['slug'], defaults=item)

    def get(self, request):
        self._seed_default_content()
        content = {}
        for item in SiteContent.objects.all():
            content[item.slug] = SiteContentSerializer(item).data
        return Response(content)
