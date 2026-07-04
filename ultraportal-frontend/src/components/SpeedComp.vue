<script setup>
import { computed } from 'vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { siteContent } = useSiteContent()
const speedrun = computed(() => siteContent.value.speedrun || {})
</script>

<template>
  <a class="anchor" id="speeds"></a>
  <div class="speedruns">
    <h1 v-motion-pop-visible>{{ speedrun.title || 'Recordes atuais de speedruns' }}</h1>
    <div class="coisos container-fluid">
      <div class="textospeed">
        <h1 v-motion-slide-visible-right>{{ speedrun.subtitle || 'Speedrun.com' }}</h1>
        <p v-motion-slide-visible-right>
          {{ speedrun.description || 'Informações sobre speedruns.' }}
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
