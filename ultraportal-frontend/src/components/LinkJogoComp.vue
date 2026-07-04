<template>
  <div class="jogo">
    <h1 v-motion-slide-visible-bottom>Gostou do jogo? Experimente a demo!</h1>
    <a v-motion-slide-visible-bottom href="https://devilmayquake.com/"
      >&#x3e;&#x3e;&#x3e; devilmayquake.com &#x3c;&#x3c;&#x3c;</a
    >
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
