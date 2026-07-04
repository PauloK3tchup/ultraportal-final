<template>
  <a class="anchor" id="speeds"></a>
  <div class="speedruns">
    <h1 v-motion-pop-visible>Recordes atuais de speedruns</h1>
    <div class="coisos container-fluid">
      <div class="textospeed">
        <h1 v-motion-slide-visible-right>Speedrun.com</h1>
        <p v-motion-slide-visible-right>
          O site speedrun.com é uma plataforma de speedrunners que se reúnem para compartilhar suas
          corridas e recordes com o objetivo de alcançar o topo. Lá você pode encontrar recordes de
          jogos de todas as plataformas e gêneros, incluindo ULTRAKILL. <br />
          <br />
          Você pode até mesmo se juntar à comunidade e tentar bater os recordes atuais. Basta criar
          uma conta e começar a enviar suas corridas. <br />
          <br />
          Você pode ver os recordes atuais do jogo à seguir.
        </p>
      </div>
      <iframe
        v-motion-slide-visible-left
        class="iframe-speed"
        src="https://www.speedrun.com/ultrakill"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<style scoped>
div.coisos {
  display: flex;
  justify-content: space-between;
}
div.speedruns {
  padding: 30px;
}

div.textospeed {
  padding: 30px;
  width: 50%;
  display: inline-block;
}

div.speedruns p {
  font-family: VCR;
  font-size: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
}

div.speedruns h1 {
  font-family: BroshK;
  font-size: 60px;
  text-align: center;
  color: rgb(255, 255, 255);
}

.iframe-speed {
  width: 50%;
  height: 400px;
  margin: 30px;
  border-radius: 20px;
  display: inline-block;
}

@media only screen and (max-width: 1111px) {
  div.coisos {
    flex-direction: column;
  }

  div.textospeed {
    width: 100%;
  }

  div.speedruns {
    padding: 30px 5px 30px 5px;
  }
  div.speedruns h1 {
    font-size: 30px;
  }

  div.speedruns p {
    font-size: 15px;
  }

  .iframe-speed {
    width: 95%;
    margin: 10px;
  }
}
</style>
