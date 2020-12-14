<template>
  <footer class="relative bg-gray-900 pt-8 pb-6">
    <SlopeSeparator direction="desc" fillColor="text-gray-900"/>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold text-white">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-500">
            Make sure to connect with me on any of these platforms.
          </h5>
          <div class="mt-6">
            <ul class="text-3xl list-none text-gray-500 pl-1">
              <SocialIcons appearance="dark"/>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center md:justify-between justify-center mt-16">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white font-semibold py-1">
            Made with 😀 by Guillaume Clement.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialIcons from './SocialIcons.vue'
import SlopeSeparator from './SlopeSeparator.vue'

export default {
  name: 'MainFooter',
  components: {
    SocialIcons,
    SlopeSeparator
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
