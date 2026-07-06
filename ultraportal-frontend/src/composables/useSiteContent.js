import { onMounted, ref } from 'vue'

const getDefaultApiBaseUrl = () => {
  // Primeiro, verificamos se temos uma URL completa configurada
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, '')
  }

  // Em ambiente server-side (SSR), retorna padrão local
  if (typeof window === 'undefined') {
    return 'http://127.0.0.1:8000'
  }

  const hostname = window.location.hostname
  const port = window.location.port

  // Em ambiente local ou localhost, usa porta 8000
  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
    return 'http://127.0.0.1:8000'
  }

  // Em ambiente de produção (AWS), tenta usar a interface http
  // Se VITE_API_URL não estiver definida, usa a porta do backend (padrão 30080)
  const apiPort = import.meta.env.VITE_API_PORT || '30080'
  return `http://${hostname}:${apiPort}`
}

const API_BASE_URL = getDefaultApiBaseUrl()

export function useSiteContent() {
  const siteContent = ref({})
  const loading = ref(true)
  const error = ref(null)

  const fetchSiteContent = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/api/site-content/`)
      if (!response.ok) {
        throw new Error('Não foi possível carregar o conteúdo do site.')
      }

      siteContent.value = await response.json()
    } catch (err) {
      error.value = err.message
      siteContent.value = {}
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchSiteContent()
  })

  return { siteContent, loading, error, fetchSiteContent }
}
