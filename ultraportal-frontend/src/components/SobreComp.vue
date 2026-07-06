<script setup>
import { computed } from 'vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { siteContent } = useSiteContent()
const about = computed(() => siteContent.value.about || {})
</script>

<template>
  <a class="anchor2" id="sobre"></a>
  <div class="container-fluid">
    <div v-motion-slide-visible-left class="artigo">
      <img class="esquerda" src="../assets/img/Ultrakill_cover.png" alt="" />
      <p>{{ about.description || 'ULTRAKILL é um jogo de ação FPS... (Mais informações)' }}</p>
    </div>
    <div v-motion-slide-visible-right class="foto">
      <img class="direita" src="../assets/img/tenebre-rosso-sangue-capa.jpg" alt="" />
    </div>
  </div>
  <div class="mais-info branco">
    <h1 v-motion-slide-visible-right class="negrito">
      {{ about.title || 'Mas sobre o que é o jogo?' }}
    </h1>
    <br />
    <p v-motion-slide-visible-left>{{ about.subtitle || 'Descrição inicial do jogo.' }}</p>
  </div>
</template>
<style scoped>
div.artigo {
  margin: 35px;
  padding: 20px;
  background-color: #800000;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 50%;
  display: flex;
}

div.artigo p {
  font-family: VCR;
  display: inline-block;
  vertical-align: top;
  font-size: 20px;
  text-align: justify;
}

div.artigo h1 {
  font-family: BroshK;
  display: inline-block;
  vertical-align: top;
  font-size: 50px;
}

.negrito {
  font-weight: bolder;
}

img.esquerda {
  margin-right: 20px;
  display: inline-block;
}

div.esquerda {
  display: inline-block;
}

div.foto {
  width: 50%;
  display: inline-block;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;
}

img.direita {
  width: 400px;
  height: auto;
  align-self: center;
}

.container-fluid {
  display: flex;
  width: 100%;
}

div.mais-info {
  padding: 50px;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

.branco {
  color: black;
  background-color: rgb(255, 255, 255);
}

.preto {
  color: white;
  background-color: rgb(0, 0, 0);
}

@media only screen and (max-width: 660px) {
  .container-fluid {
    display: block;
    width: 100%;
  }
  div.artigo {
    width: 95%;
    margin-bottom: 30px;
    margin-left: 10px;
    display: block;
  }
  div.foto {
    display: none;
  }
  div.artigo p {
    font-size: 13px;
    display: block;
  }

  div.artigo img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 25px;
  }

  div.mais-info {
    padding: 20px;
  }

  div.mais-info h1 {
    font-size: 25px;
  }

  div.mais-info p {
    font-size: 12px;
    text-align: justify;
  }
}
@media only screen and (min-width: 661px) and (max-width: 1270px) {
  .container-fluid {
    display: block;
    width: 100%;
  }
  div.artigo {
    width: 90%;
    margin-bottom: 30px;
  }
  div.foto {
    width: 100%;
  }
}
</style>
