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
        <div class="w-full md:w-5/12 md:pl-10 sm:ml-6 sm:px-4 mr-auto ml-auto mt-20 sm:mt-32 md:mt-48 sm:pb-6">
          <div class="relative flex flex-col min-w-0 w-full mb-56 md:mb-32 mt-48 md:mt-0 -ml-4 md:-ml-40 lg:-ml-16 xl:ml-0">
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
        { src: '/img/portfolio/las-vegas-summit.jpg', alt: 'Las Vegas Summit Team Image', style: 'img-top-right' },
        { src: '/img/portfolio/gillette-stadium-healthcare-exchange.png', alt: 'Gillete Stadium Guest Speaker', style: 'img-top-left' },
        { src: '/img/portfolio/algonquin-college-mentor.jpg', alt: 'Algonquin College Student Mentor', style: 'img-bottom-right' },
        { src: '/img/portfolio/adobe-ottawa.jpeg', alt: 'Adobe Meetup Guest Speaker', style: 'img-bottom-left' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
