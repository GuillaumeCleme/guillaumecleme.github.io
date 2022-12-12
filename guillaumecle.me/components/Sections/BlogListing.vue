<template>
  <section class="mt-12 relative bg-gray-200">
    <SlopeSeparator direction="asc" fill-color="text-gray-200" />
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full -mt-40 mb-20 xl:mb-40">
          <div class="container mx-auto px-6 relative">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <BlogCard
                v-for="(blog, index) in blogs"
                :key="blog.slug"
                :title="blog.title"
                :description="blog.description"
                :cover="blog.cover"
                :slug="blog.slug"
                :featured="index == 0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlopeSeparator from '@/components/Sections/Fragments/SlopeSeparator.vue'
import BlogCard from '@/components/Cards/BlogCard.vue'

export default {
  name: 'BlogListing',
  components: {
    SlopeSeparator,
    BlogCard
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
