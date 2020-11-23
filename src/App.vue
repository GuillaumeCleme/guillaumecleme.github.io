<template>
  <div id="app">
    <NavBar />
    <main>
      <MainHero />
      <SectionFocus />
      <SectionAboutMe />
      <SectionExperience />
    </main>
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MainHero from './components/MainHero.vue'
import SectionFocus from './components/SectionFocus.vue'
import SectionAboutMe from './components/SectionAboutMe.vue'
import SectionExperience from './components/SectionExperience.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    MainHero,
    SectionFocus,
    SectionAboutMe,
    SectionExperience
  }
}
</script>

<style>

</style>
