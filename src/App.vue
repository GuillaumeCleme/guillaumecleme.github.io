<template>
  <div id="app">
    <NavBar />
    <MainHero />
    <SectionFocus />
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MainHero from './components/MainHero.vue'
import SectionFocus from './components/SectionFocus.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    MainHero,
    SectionFocus
  }
}
</script>

<style>

</style>
