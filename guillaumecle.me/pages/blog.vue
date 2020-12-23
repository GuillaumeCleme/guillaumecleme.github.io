<template>
  <div>
    <NavBar />
    <main />
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'Blog',
  components: {
    NavBar,
    MainFooter
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
