<template>
  <section id="aboutme" class="pb-40 relative bg-gray-200">
    <div class="container mx-auto overflow-hidden pb-20">
      <div class="flex flex-wrap items-center">
        <div class="w-9/12 md:w-4/12 px-4 ml-auto mr-auto mt-24 sm:mt-32 md:mt-48">
          <div
            class="text-xl text-blue-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400"
          >
            <font-awesome-icon :icon="['fas', 'address-card']" />
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            About Me.
          </h3>
          <p class="text-lg font-light leading-relaxed my-4 text-gray-700">
            I enjoy spending time in nature, hiking, camping, climbing mountains, driving around in my Jeep, and staying active. When relaxing, I can also be found reading business, finance, and technology books while enjoying the darkest coffee available.
          </p>
        </div>
        <div class="w-full md:w-5/12 pl-10 sm:ml-6 sm:px-4 mr-auto ml-auto mt-20 sm:mt-32 md:mt-48 sm:pb-6">
          <div class="relative flex flex-col min-w-0 w-full mb-48 md:mb-6 mt-48 md:mt-0 ml-0 md:-ml-32 lg:ml-0">
            <PortfolioImage
              v-for="image in portfolioImages"
              :key="image.key"
              :src="image.src"
              :alt="image.alt"
              :styling="image.style"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioImage from '@/components/Images/PortfolioImage.vue'

export default {
  name: 'SectionAboutMe',
  components: {
    PortfolioImage
  },
  data () {
    return {
      portfolioImages: [
        { src: 'assets/img/portfolio/pexels-lukas-574071.jpg', alt: 'Computer Development', style: 'compdev' },
        { src: 'assets/img/portfolio/pexels-jose-vega-3801030.jpg', alt: 'Foggy Forest', style: 'forest' },
        { src: 'assets/img/portfolio/pexels-nathan-cowley-1151282.jpg', alt: 'Sunny Beach', style: 'beach' },
        { src: 'assets/img/portfolio/pexels-di-bella-coffee-1233528.jpg', alt: 'Cup of Espresso', style: 'coffee' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
