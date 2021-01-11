<template>
  <img
    :src="require(`@/${src}`)"
    :alt="alt"
    :style="style"
    class="w-full align-middle rounded-lg absolute shadow-lg"
  >
</template>

<!--
<img alt="Computer Development"
  src="./img/portfolio/pexels-lukas-574071.jpg"
  class="w-full align-middle rounded-lg absolute shadow-lg invisible sm:visible"
  style="max-width:210px;left:260px;top:-160px" />
<img alt="Foggy Forest"
  src="./img/portfolio/pexels-jose-vega-3801030.jpg"
  class="w-full align-middle rounded-lg absolute shadow-lg"
  style="max-width:180px;left:70px;top:-225px;z-index:2" />
<img alt="Sunny Beach"
  src="./img/portfolio/pexels-nathan-cowley-1151282.jpg"
  class="w-full align-middle rounded-lg absolute shadow-lg invisible sm:visible"
  style="max-width:180px;left:260px;top:-10px;z-index:2" />
<img alt="Cup of Espresso"
  src="./img/portfolio/pexels-di-bella-coffee-1233528.jpg"
  class="w-full align-middle rounded-lg absolute shadow-2xl"
  style="max-width:200px;left:50px;top:55px" />
-->

<script>
export default {
  name: 'PortfolioImage',
  props: {
    src: String,
    alt: String,
    style: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
