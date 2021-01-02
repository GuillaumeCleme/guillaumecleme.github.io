<template>
  <div>
    <NavBar />
    <main>
      <SecondaryHero />
      <div class="relative py-20">
        <SlopeSeparator direction="desc" fill-color="text-white" />
      </div>
      <BlogListing />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SecondaryHero from '../components/SecondaryHero.vue'
import BlogListing from '../components/BlogListing.vue'
import MainFooter from '../components/MainFooter.vue'
import SlopeSeparator from '../components/SlopeSeparator.vue'

export default {
  name: 'Blog',
  components: {
    NavBar,
    SecondaryHero,
    SlopeSeparator,
    BlogListing,
    MainFooter
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
