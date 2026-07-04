<script setup>
import { computed } from 'vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { siteContent } = useSiteContent()
const demo = computed(() => siteContent.value.demo || {})
</script>

<template>
  <div class="jogo">
    <h1 v-motion-slide-visible-bottom>{{ demo.title || 'Gostou do jogo? Experimente a demo!' }}</h1>
    <a v-motion-slide-visible-bottom :href="demo.content?.link || 'https://devilmayquake.com/'">
      {{ demo.content?.label || '>>> devilmayquake.com <<<' }}
    </a>
  </div>
</template>
<style scoped>
div.jogo {
  background-color: white;
  color: black;
  text-align: center;
  padding: 30px;
}

div.jogo h1 {
  font-family: BroshK;
  font-size: 60px;
  text-align: center;
  color: black;
}

div.jogo a {
  font-family: VCR;
  font-size: 40px;
  text-align: center;
  color: rgb(153, 0, 0);
  text-decoration: none;
}

div.jogo a:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 660px) {
  div.jogo h1 {
    font-size: 30px;
  }
  div.jogo a {
    font-size: 20px;
  }
}
</style>
