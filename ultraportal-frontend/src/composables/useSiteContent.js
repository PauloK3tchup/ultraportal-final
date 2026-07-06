import { onMounted, ref } from 'vue'

const getDefaultApiBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, '')
  }
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
