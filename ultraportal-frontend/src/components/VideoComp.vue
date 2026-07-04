<script setup>
import { computed } from 'vue'
import VideoBackground from 'vue-responsive-video-background-player'
import { useSiteContent } from '@/composables/useSiteContent'

const { siteContent } = useSiteContent()
const hero = computed(() => siteContent.value.hero || {})
</script>

<template>
  <video-background
    class="b"
    src="../src/assets/mp4/ultravideo.mp4"
    overlay="linear-gradient(0deg,#000000,#80000085)"
    style="max-height: 600px; height: 500vh"
  >
    <h1 class="dentro">{{ hero.title || 'ULTRAPORTAL' }}</h1>
    <h3 class="dentro" v-html="hero.subtitle || 'Aprenda a decimar o inferno com estilo!'" />
  </video-background>
</template>
<style scoped>
h1.dentro {
  font-family: BroshK;
  font-size: 10rem;
  color: white;
  text-align: center;
  margin-top: 410px;
}

.b {
  overflow-x: hidden;
  overflow-y: hidden;
}

h3.dentro {
  font-family: VCR;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: -55px;
}

@media only screen and (max-width: 850px) {
  h1.dentro {
    font-size: 3.5rem;
    margin-top: 450px;
  }
  h3.dentro {
    font-size: 0.8rem;
    margin-top: 0px;
  }
}
</style>
