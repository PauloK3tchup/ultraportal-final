<script setup>
import { computed } from 'vue'
import CompOpcao from '@/components/CompOpcao.vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { siteContent } = useSiteContent()
const strategies = computed(() => siteContent.value.strategies || {})
const items = computed(() => strategies.value.content || [])
</script>

<template>
  <div class="estrategias container-fluid">
    <a class="anchor2" id="strats"></a>
    <h1 v-motion-slide-visible-right>{{ strategies.title || 'Principais Estratégias' }}</h1>
    <div v-motion-pop-visible class="botoes">
      <CompOpcao
        v-for="item in items"
        :key="item.title"
        class="moedas sombra"
        :texto="item.title"
      />
    </div>
  </div>
</template>
<style scoped>
div.estrategias {
  background-color: white;
  padding: 30px;
}

div.botoes {
  overflow: hidden;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.estrategias h1 {
  font-family: BroshK;
  font-size: 60px;
  text-align: center;
  color: black;
}

@media only screen and (max-width: 1111px) {
  div.botoes {
    flex-direction: column;
  }
  div.estrategias h1 {
    font-size: 30px;
  }
}
</style>
