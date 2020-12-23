<template>
  <div>
    <NavBar />
    <main>
      <SecondaryHero />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SecondaryHero from '../components/SecondaryHero.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'Blog',
  components: {
    NavBar,
    SecondaryHero,
    MainFooter
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
