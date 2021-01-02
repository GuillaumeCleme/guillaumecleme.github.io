<template>
  <section class="mt-12 relative bg-gray-200">
    <SlopeSeparator direction="asc" fill-color="text-gray-200" />
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full -mt-40 mb-20 xl:mb-40">
          <div class="container mx-auto px-6 relative">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <BlogCard
                title="Digitizing Paper Based Processes"
                description="Digitizing processes can be very difficult. Tools have for a long time helped us gain efficiencies and in many cases, those tools have shaped our procedures..."
                image-url="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                :featured="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlopeSeparator from './SlopeSeparator.vue'
import BlogCard from './Cards/BlogCard.vue'

export default {
  name: 'BlogListing',
  components: {
    SlopeSeparator,
    BlogCard
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
