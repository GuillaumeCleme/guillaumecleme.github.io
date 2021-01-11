<template>
  <div>
    <NavBar />
    <main>
      <SecondaryHero />
      <div class="relative py-20">
        <SlopeSeparator direction="desc" fill-color="text-white" />
      </div>
      <BlogListing :blogs="blogs" />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '@/components/Nav/NavBar.vue'
import SecondaryHero from '@/components/Sections/SecondaryHero.vue'
import BlogListing from '@/components/Sections/BlogListing.vue'
import MainFooter from '@/components/Sections/MainFooter.vue'
import SlopeSeparator from '@/components/Sections/Fragments/SlopeSeparator.vue'

export default {
  name: 'Blog',
  components: {
    NavBar,
    SecondaryHero,
    SlopeSeparator,
    BlogListing,
    MainFooter
  },
  async asyncData ({ $content, params, error }) {
    const blogs = await $content('blog', params.slug)
      .only(['title', 'description', 'slug', 'cover'])
      .sortBy('date', 'desc')
      .fetch()
      // eslint-disable-next-line
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      blogs
    }
  },
  data () {
    return {
      ogTitle: 'Guillaume Clement&#039;s personal blog.',
      ogDesc: 'Checkout Guillaume&#039;s blog which covers topics around Code, Product, Methodology, and Technology',
      ogImageUrl: 'https://guillaumecle.me/og-image.png'
    }
  },
  head () {
    return {
      title: 'Guillaume Clement | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guillaume Clement&#039;s blog covering topics around Code, Product, Methodology, and Technology.'
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

<style>
html {
    scroll-behavior: smooth;
}
</style>
