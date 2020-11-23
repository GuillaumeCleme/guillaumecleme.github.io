<template>
  <nav class="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800"
          href="#">
          Guillaume Clement
        </a>
        <button
          v-on:click="toggleMobileNav"
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" v-bind:class="open === true ? 'block' : 'hidden'">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <NavLink v-for="link in navLinks"
            v-bind:key="link.key"
            v-bind:href="link.href"
            v-bind:label="link.label"
            v-bind:icon="link.icon"/>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'NavBar',
  components: {
    NavLink
  },
  data: function () {
    return {
      open: false,
      navLinks: [
        { href: '#aboutme', label: 'About Me', icon: ['fas', 'address-card'] },
        { href: '#experience', label: 'My Experience', icon: ['fas', 'briefcase'] },
        { href: './blog.html', label: 'My Blog', icon: ['fas', 'book'] }
      ]
    }
  },
  methods: {
    toggleMobileNav: function () {
      this.open = this.open !== true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
