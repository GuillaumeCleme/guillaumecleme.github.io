<template>
  <div>
    <NavBar />
    <main>
      <MainHero />
      <SectionFocus />
      <SectionAboutMe />
      <SectionExperience />
    </main>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/Nav/NavBar.vue'
import MainHero from '@/components/Sections/MainHero.vue'
import SectionFocus from '@/components/Sections/SectionFocus.vue'
import SectionAboutMe from '@/components/Sections/SectionAboutMe.vue'
import SectionExperience from '@/components/Sections/SectionExperience.vue'
import MainFooter from '@/components/Sections/MainFooter.vue'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  components: {
    NavBar,
    MainHero,
    SectionFocus,
    SectionAboutMe,
    SectionExperience,
    MainFooter
  },
  setup(){
    const ogTitle = 'Guillaume Clement&#039;s personal portfolio.';
    const ogDesc = 'View Guillaume&#039;s portfolio and contact information.';
    const ogImageUrl = 'https://guillaumecle.me/og-image.png';

    useHead({
      title: 'Guillaume Clement | Digital Transformation Specialist, Technical Leader, Advisor',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guillaume Clement&#039;s portfolio listing skills such as AEM (Adobe Experience Manager) and AEM Forms and experience as a Director of Solution Delivery.'
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
