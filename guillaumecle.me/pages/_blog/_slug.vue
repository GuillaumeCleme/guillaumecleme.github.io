
<template>
  <article>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  async asyncData ({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  }
}

</script>
