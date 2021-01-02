<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-stretch mt-24 md:mt-20">
    <div class="md:col-start-2 w-full px-4 flex justify-center justify-self-center">
      <div class="text-center mt-0 md:mt-6">
        <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
          Guillaume Clement
        </h3>
        <div class="mt-0 mb-2 text-gray-700">
          <font-awesome-icon :icon="['fas', 'briefcase']" class="mr-2 text-lg text-gray-700" />Dir., Solution Delivery
        </div>
        <div class="text-sm leading-normal mt-3 mb-2 text-gray-700 font-medium uppercase">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2 text-lg text-gray-700" />Ottawa, Ontario
        </div>
      </div>
    </div>
    <div class="w-full px-4 text-center justify-center justify-self-center md:text-right md:justify-end md:justify-self-end">
      <div class="py-1 px-3 md:-mt-16">
        <!--https://tech.cymi.org/tweet-intents-->
        <a
          class="bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
          type="button"
          style="transition: all 0.15s ease 0s;"
          :href="shareUrl"
        >
          <i class="fab fa-twitter" />
          Share
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    shareUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
