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

<script>
import NavBar from '@/components/NavBar.vue'
import MainHero from '@/components/MainHero.vue'
import SectionFocus from '@/components/SectionFocus.vue'
import SectionAboutMe from '@/components/SectionAboutMe.vue'
import SectionExperience from '@/components/SectionExperience.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'Index',
  components: {
    NavBar,
    MainHero,
    SectionFocus,
    SectionAboutMe,
    SectionExperience,
    MainFooter
  },
  data () {
    return {
      ogTitle: 'Guillaume Clement&#039;s personal portfolio.',
      ogDesc: 'View Guillaume&#039;s portfolio and contact information.',
      ogImageUrl: 'https://guillaumecle.me/og-image.png'
    }
  },
  head () {
    return {
      title: 'Guillaume Clement | Digital Transformation Specialist, Technical Leader, Advisor',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guillaume Clement&#039;s portfolio listing skills such as AEM (Adobe Experience Manager) and AEM Forms and experience as a Director of Solution Delivery.'
        },
        { name: 'og:title', content: this.ogTitle },
        { name: 'og:description', content: this.ogDesc },
        { name: 'og:image', content: this.ogImageUrl },
        { name: 'og:image:secure_url', content: this.ogImageUrl },
        { name: 'og:image:alt', content: this.ogTitle },
        { name: 'twitter:title', content: this.ogTitle },
        { name: 'twitter:description', content: this.ogDesc },
        { name: 'twitter:image', content: this.ogImageUrl }
      ]
    }
  }
}
</script>
