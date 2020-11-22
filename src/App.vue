<template>
  <div id="app">
    <NavBar />
    <MainHero />
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MainHero from './components/MainHero.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    MainHero
  }
}
</script>

<style>

</style>
