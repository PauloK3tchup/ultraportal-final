<script setup>
import CompOpcao from '@/components/CompOpcao.vue'
</script>

<template>
  <div class="estrategias container-fluid">
    <a class="anchor2" id="strats"></a>
    <h1 v-motion-slide-visible-right>Principais Estratégias</h1>
    <div v-motion-pop-visible class="botoes">
      <CompOpcao class="moedas sombra" texto="Moedas" />
      <CompOpcao class="pulo sombra" texto="Movimentação" />
      <CompOpcao class="probost sombra" texto="Outras" />
      <!-- <CompOpcao v-motion-pop-visible class="moedas sombra" texto="Moedas" /> -->
      <!-- <CompOpcao v-motion-pop-visible class="pulo sombra" texto="Movimentação" /> -->
      <!-- <CompOpcao v-motion-pop-visible class="probost sombra" texto="Outras" /> -->
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
