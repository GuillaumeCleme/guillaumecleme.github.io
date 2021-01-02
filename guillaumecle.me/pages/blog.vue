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
import NavBar from '../components/NavBar.vue'
import SecondaryHero from '../components/SecondaryHero.vue'
import BlogListing from '../components/BlogListing.vue'
import MainFooter from '../components/MainFooter.vue'
import SlopeSeparator from '../components/SlopeSeparator.vue'

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
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
