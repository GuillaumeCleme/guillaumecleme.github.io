<template>
  <img
    :src="src"
    :alt="alt"
    class="w-full align-middle rounded-lg absolute shadow-lg"
    :class="styling"
  >
</template>

<script>
export default {
  name: 'PortfolioImage',
  props: {
    src: String,
    alt: String,
    styling: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-top-right {
  max-width:210px;
  left:260px;
  top:-180px;
  z-index:2;
}
.img-top-left {
  max-width:180px;
  left:70px;
  top:-225px;
  z-index:2;
}
.img-bottom-right {
  max-width:180px;
  left:260px;
  top:-10px;
  z-index:2;
}
.img-bottom-left {
  max-width:200px;
  left:50px;
  top:55px;
}
</style>
