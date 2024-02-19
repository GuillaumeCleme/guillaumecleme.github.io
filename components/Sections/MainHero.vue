<template>
  <section class="header relative pt-16 items-center flex h-screen overflow-x-clip" style="max-height:860px">
    <div class="container mx-auto items-center flex flex-wrap">
      <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div class="pt-32 sm:pt-0">
          <h2 class="font-semibold text-5xl text-gray-800">
            Hi there! I'm Guillaume.
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            I am an experienced technology professional with over 10 years of technical experience as an analyst, lead developer, architect, and director specializing in enterprise technology.
          </p>
          <div class="mt-12">
            <ul class="text-5xl list-none text-gray-800">
              <SocialIcons appearance="light" />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img
      class="absolute b-auto right-0 lg:w-6/12 w-full -z-10 opacity-40 md:opacity-100 md:z-0 translate-x-[35%] translate-y-[10%]"
      src="/img/guillaume-cleme-lean.png"
      alt="Guillaume in a leaning pose"
      style="max-height:1000px"
    >
  </section>
</template>

<script>
import SocialIcons from '@/components/Sections/Fragments/SocialIcons.vue'

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
