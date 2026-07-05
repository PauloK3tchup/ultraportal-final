# ULTRAPORTAL

Projeto full-stack com backend em Django (Django REST Framework) e frontend em Vue 3 (Vite).

_Essa documentação foi gerada por inteligência artificial._

## Visão geral

- Backend: [ultraportal-backend](ultraportal-backend) — API e painel admin (Django).
- Frontend: [ultraportal-frontend](ultraportal-frontend) — SPA em Vue 3 + Vite.
- Infra & deployment: arquivos de Docker, `docker-compose.yml`, `infra/ansible` e `infra/terraform`.

## Estrutura relevante

- [ultraportal-backend](ultraportal-backend)
- [ultraportal-frontend](ultraportal-frontend)
- [infra/ansible](infra/ansible)
- [infra/terraform](infra/terraform)
- `docker-compose.yml`

## Requisitos locais

- Docker & Docker Compose (recomendado)
- Python 3.10+ (para execução local do backend)
- Node.js 18+ e npm (para execução local do frontend)

---

## Quickstart (modo recomendado: Docker Compose)

1. Copie variáveis de ambiente se necessário:

```bash
cp .env.example .env         # se existir arquivo exemplo
```

2. Subir a stack com Docker Compose:

```bash
docker compose up --build
```

3. Acesse:

- Frontend: http://localhost:5173 (ou rota definida no compose)
- API Admin: http://localhost:8000/admin/

Para parar e remover containers:

```bash
docker compose down
```

---

## Desenvolvimento local (sem Docker)

### Backend (Django)

1. Criar e ativar ambiente virtual:

```bash
cd ultraportal-backend
python -m venv .venv
# Linux/macOS
source .venv/bin/activate
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
```

2. Instalar dependências e preparar banco:

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata initial_data.json
python manage.py createsuperuser
python manage.py runserver
```

A API pública está em `/api/` (ex.: http://127.0.0.1:8000/api/site-content/).

### Frontend (Vue 3 + Vite)

```bash
cd ultraportal-frontend
npm install
npm run dev
```

O frontend de desenvolvimento roda tipicamente em http://localhost:5173.

Para build de produção:

```bash
npm run build
```

---

## Infraestrutura e deployment

- `infra/terraform` contém configurações Terraform (ex.: provisionamento de infra em cloud).
- `infra/ansible` contém playbooks para preparação/configuração de servidores.
- Existem Dockerfiles em `ultraportal-backend` e `ultraportal-frontend` para contêinerização.

Observação: a execução de Terraform/Ansible depende de credenciais e ambiente externo; verifique `infra/terraform/terraform.tfvars.example` e `infra/ansible/inventory/hosts.ini` antes de rodar.

### Execução Ansible (exemplo)

```bash
cd infra/ansible
ansible-playbook -i inventory/hosts.ini playbooks/prepare-servers.yml
```

### Execução Terraform (exemplo)

```bash
cd infra/terraform
terraform init
terraform plan
terraform apply
```

---

## Variáveis de ambiente úteis

- Frontend: `VITE_API_URL` (apontar para URL da API, ex.: `http://localhost:8000`).
- Backend: usar `DJANGO_SETTINGS_MODULE` conforme necessário e variáveis de conexão do banco (quando não usar SQLite).

---

## Comandos úteis

- Subir containers: `docker compose up --build`
- Parar containers: `docker compose down`
- Rodar testes Django: `cd ultraportal-backend && python manage.py test`
- Criar superuser: `python manage.py createsuperuser`
- Build frontend: `cd ultraportal-frontend && npm run build`

---

## Testes

Rodar os testes do Django:

```bash
cd ultraportal-backend
python manage.py test
```

---

## Contribuição

1. Abra uma issue descrevendo a mudança proposta.
2. Faça um fork e crie uma branch para a feature/bugfix.
3. Envie um Pull Request com descrição clara e passos para reproduzir.

---

## Licença

Adicionar aqui o tipo de licença do projeto (ex.: MIT). Se ainda não definido, considerar adicionar `LICENSE`.

---

## Contato

Para dúvidas e suporte, abra uma issue neste repositório.
