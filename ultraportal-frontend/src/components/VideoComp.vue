<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
</script>

<template>
  <video-background
    class="b"
    src="../src/assets/mp4/ultravideo.mp4"
    overlay="linear-gradient(0deg,#000000,#80000085)"
    style="max-height: 600px; height: 500vh"
  >
    <h1 class="dentro">ULTRAPORTAL</h1>
    <h3 class="dentro">
      Aprenda a decimar o inferno com e<span style="font-style: italic; color: red">SSS</span>tilo!
    </h3>
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
