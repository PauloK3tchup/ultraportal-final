<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  }
}
</script>
<template>
  <header :class="{ onScroll: !view.topOfPage }">
    <a class="title" href="#"> <h1>ULTRAPORTAL</h1></a>
    <div class="header-direita">
      <div :class="{ onScroll: !view.topOfPage }" id="drop">
        <h3 class="bruh">
          <FontAwesomeIcon icon="fa-bars" />
        </h3>
        <div class="baixo">
          <a href="#sobre"> Sobre</a>
          <a href="#strats">Estratégias</a>
          <a href="#speeds">Speedruns</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #00000000;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.25s;
  z-index: 1;
}

header.onScroll {
  background-color: #000;
}

h1 {
  font-family: BroshK;
  font-size: 3rem;
  margin-left: 5px;
}

a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-family: VCR;
  padding: 10px;
  transition: 0.15s;
  border-radius: 5px;
}
a:hover {
  color: rgb(0, 0, 0);
  background-color: white;
  transform: scale(1.2);
}
a:active {
  color: white;
  background-color: black;
  transform: scale(0.9);
}

.bruh {
  display: none;
}

@media only screen and (max-width: 850px) {
  .title,
  h1 {
    font-size: 2rem;
  }
  .title {
    margin-left: -2px;
  }
  a {
    margin: 0 0.5rem;
    padding: 3px;
  }

  #drop:hover .baixo {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70%;
    right: 0;
  }

  .bruh {
    flex-direction: column;
    display: block;
  }

  .baixo {
    transition: 0.15s;
    flex-direction: column;
    display: none;
    align-items: flex-start;
    background-color: black;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 13px;
  }

  #drop {
    display: flex;
    transition: 0.15s;
  }
}
</style>
