<script>
// import { RouterLink, RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faPencil,
  faPhone,
  faShoppingCart,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  faShoppingCart,
  faSearch,
  faBars,
  faTrashCan,
  faPencil,
  faGithub,
  faEnvelope,
  faPhone,
  faInstagram
)

export default {
  components: {
    FooterComp,
    HeaderComp
  }
}
</script>

<template>
  <HeaderComp />
  <body>
    <RouterView />
  </body>
  <footer>
    <FooterComp />
  </footer>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(0, 0, 0);
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;
  min-height: 1200px;
}
</style>
