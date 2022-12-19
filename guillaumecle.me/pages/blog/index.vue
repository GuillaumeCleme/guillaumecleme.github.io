<template>
  <div>
    <NavBar />
    <main>
      <SecondaryHero />
      <div class="relative py-20">
        <SlopeSeparator direction="desc" fill-color="text-white" />
      </div>
      <BlogListing />
    </main>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/Nav/NavBar.vue'
import SecondaryHero from '@/components/Sections/SecondaryHero.vue'
import BlogListing from '@/components/Sections/BlogListing.vue'
import MainFooter from '@/components/Sections/MainFooter.vue'
import SlopeSeparator from '@/components/Sections/Fragments/SlopeSeparator.vue'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Blog',
  components: {
    NavBar,
    SecondaryHero,
    SlopeSeparator,
    BlogListing,
    MainFooter
  },
  setup(){
    const ogTitle = 'Guillaume Clement&#039;s personal blog.';
    const ogDesc = 'Checkout Guillaume&#039;s blog which covers topics around Code, Product, Methodology, and Technology';
    const ogImageUrl = 'https://guillaumecle.me/og-image.png';

    useHead({
      title: 'Guillaume Clement | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guillaume Clement&#039;s blog covering topics around Code, Product, Methodology, and Technology.'
        },
        { name: 'og:title', content: ogTitle },
        { name: 'og:description', content: ogDesc },
        { name: 'og:image', content: ogImageUrl },
        { name: 'og:image:secure_url', content: ogImageUrl },
        { name: 'og:image:alt', content: ogTitle },
        { name: 'twitter:title', content: ogTitle },
        { name: 'twitter:description', content: ogDesc },
        { name: 'twitter:image', content: ogImageUrl }
      ]
    });
  }
});
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
