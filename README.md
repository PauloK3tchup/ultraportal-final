# ULTRAPORTAL

Este projeto agora possui um backend em Django REST Framework e um frontend em Vue 3. O conteúdo do site é servido pelo backend e consumido pelo frontend.

## Estrutura do projeto

- ultraportal-frontend: aplicação Vue 3
- ultraportal-backend: API Django REST Framework

## Requisitos

- Python 3.10+
- Node.js 18+
- npm

## 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
cd ultraportal-final
```

## 2. Configurar o backend

```bash
cd ultraportal-backend
python -m venv .venv
source .venv/bin/activate
# no Windows PowerShell:
# .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata initial_data.json
python manage.py createsuperuser
python manage.py runserver
```

A API ficará disponível em:

- http://127.0.0.1:8000/api/site-content/
- http://127.0.0.1:8000/admin/

## 3. Configurar o frontend

Em outro terminal:

```bash
cd ultraportal-frontend
npm install
npm run dev
```

O frontend ficará disponível em:

- http://localhost:5173

## 4. Variável de ambiente opcional

Se quiser trocar a URL do backend, crie um arquivo .env na pasta ultraportal-frontend com:

```bash
VITE_API_URL=http://127.0.0.1:8000
```

## 5. Testar o backend

```bash
cd ultraportal-backend
python manage.py test
```

## 6. Build do frontend

```bash
cd ultraportal-frontend
npm run build
```

## Usuário administrador

Após executar o comando createsuperuser, use as credenciais criadas para acessar o painel administrativo em:

- http://127.0.0.1:8000/admin/
