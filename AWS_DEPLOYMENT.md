# Configuração Frontend-Backend para AWS EC2

## Problema Original

O frontend não conseguia se comunicar com o backend quando rodando em uma instância EC2 da AWS.

## Soluções Implementadas

### 1. **useSiteContent.js** - Melhorado

- Agora detecta automaticamente o protocolo (HTTP/HTTPS)
- Suporta variável de ambiente `VITE_API_PORT`
- Mantém fallback inteligente para localhost em desenvolvimento

### 2. **docker-compose.yml** - Atualizado

- Backend agora exposto em DUAS portas:
  - `8000:8000` - para comunicação interna
  - `30080:8000` - para acesso externo (AWS)
- Suporta variáveis de ambiente `VITE_API_URL` e `VITE_API_PORT`

### 3. **.env.example** - Novo arquivo

Documenta como configurar as variáveis de ambiente

## Como Usar na AWS EC2

### Opção 1: Usando Variável de Ambiente (Recomendado)

```bash
# Clone e acesse o diretório
cd /seu/caminho/ultraportal-final

# Configure a URL da API
export VITE_API_URL="http://SEU_IP_EC2:30080"

# Ou somente a porta (se o frontend conseguir resolver o hostname)
export VITE_API_PORT="30080"

# Inicie com docker-compose
docker-compose up
```

### Opção 2: Usando .env Local

```bash
# No diretório ultraportal-final/ultraportal-frontend/, crie um arquivo .env:

# .env
VITE_API_URL=http://seu-ip-ec2-ou-dominio:30080
```

### Verificações Importantes na AWS

1. **Security Group**: Certifique-se que as portas estão abertas
   - Porta `30080` (Backend API) - entrada
   - Porta `5173` (Frontend dev) - entrada
   - Porta `8000` (Backend local) - entrada

2. **CORS**: Já está configurado no Django (`CORS_ALLOW_ALL_ORIGINS = True`)

3. **Teste a Conectividade**:
   ```bash
   # Do seu computador local
   curl http://seu-ip-ec2:30080/api/site-content/
   ```

## Como Funciona Agora

### Em Desenvolvimento Local

- Frontend acessa `http://127.0.0.1:8000`
- Variáveis de ambiente são ignoradas

### Em Produção (AWS)

- Frontend tenta acessar `http://<seu-hostname>:30080`
- Ou usa a URL configurada em `VITE_API_URL`
- Suporta HTTPS automaticamente

## Próximos Passos (Opcional)

1. **Nginx Reverso**: Configure um reverse proxy para melhor performance
2. **HTTPS**: Use Let's Encrypt para certificado SSL
3. **Variáveis de Ambiente Persistentes**: Configure em `/etc/environment` da EC2
