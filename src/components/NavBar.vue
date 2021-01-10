<template>
  <nav class="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <NuxtLink
          to="/"
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800"
        >
          Guillaume Clement
        </NuxtLink>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleMobileNav"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" :class="open === true ? 'block' : 'hidden'">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <NavLink
            v-for="link in navLinks"
            :key="link.key"
            :href="link.href"
            :label="link.label"
            :icon="link.icon"
          />
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
  data () {
    return {
      open: false,
      navLinks: [
        { href: '/#aboutme', label: 'About Me', icon: ['fas', 'address-card'] },
        { href: '/#experience', label: 'My Experience', icon: ['fas', 'briefcase'] },
        { href: '/blog', label: 'My Blog', icon: ['fas', 'book'] }
      ]
    }
  },
  methods: {
    toggleMobileNav () {
      this.open = this.open !== true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
