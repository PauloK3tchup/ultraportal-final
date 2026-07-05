import { onMounted, ref } from 'vue'

const getDefaultApiBaseUrl = () => {
  if (typeof window === 'undefined') {
    return 'http://127.0.0.1:8000'
  }

  const hostname = window.location.hostname

  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
    return 'http://127.0.0.1:8000'
  }

  return `http://${hostname}:30080`
}

const API_BASE_URL = (import.meta.env.VITE_API_URL || getDefaultApiBaseUrl()).replace(/\/$/, '')

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
