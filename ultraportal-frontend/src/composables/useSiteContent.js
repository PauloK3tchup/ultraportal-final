import { onMounted, ref } from 'vue'

const getDefaultApiBaseUrl = () => {
  // Primeiro: Se VITE_API_URL está definida, usa ela (prioritária)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, '')
  }

  // Se estamos no browser, use o hostname atual e force a porta 30080
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname || 'localhost'
    return `http://${hostname}:30080`
  }

  // Fallback final (server-side)
  return 'http://localhost:8000'
}

const API_BASE_URL = getDefaultApiBaseUrl()
console.log('[useSiteContent] API_BASE_URL:', API_BASE_URL)

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
