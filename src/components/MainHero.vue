<template>
  <section class="header relative pt-16 items-center flex h-screen" style="max-height:860px">
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-5xl text-gray-800">Hi there! I'm Guillaume.</h2>
            <p class="mt-4 text-lg leading-relaxed text-gray-700">
              I am an experienced technology professional with over 10 years of technical experience as an analyst, lead developer, architect, and director specializing in enterprise technology.
            </p>
            <div class="mt-12">
              <ul class="text-5xl list-none text-gray-800">
                <SocialIcons appearance="light"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img class="absolute top-0 b-auto right-0 -mt-12 sm:mt-0 sm:w-6/12 w-10/12 z-0"
        src="../assets/img/blue-geo-background-crop.png"
        alt="Background Graphic - Blue Triangles" style="max-height:1000px" />
    </section>
</template>

<script>
import SocialIcons from './SocialIcons.vue'

export default {
  name: 'MainHero',
  components: {
    SocialIcons
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
