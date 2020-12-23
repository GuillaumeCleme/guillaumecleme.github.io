<template>
  <div>
    <NavBar />
    <main>
      <MainHero />
      <SectionFocus />
      <SectionAboutMe />
      <SectionExperience />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainHero from '../components/MainHero.vue'
import SectionFocus from '../components/SectionFocus.vue'
import SectionAboutMe from '../components/SectionAboutMe.vue'
import SectionExperience from '../components/SectionExperience.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'Index',
  components: {
    NavBar,
    MainHero,
    SectionFocus,
    SectionAboutMe,
    SectionExperience,
    MainFooter
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
