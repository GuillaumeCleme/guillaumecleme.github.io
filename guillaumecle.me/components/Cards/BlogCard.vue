<template>
  <div
    class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700"
    :class="[
      featured ?
        'lg:max-w-none lg:col-span-2 lg:row-span-2' :
        ''
    ]"
  >
    <a href="./blog/2020-11-14-digitizing-paper-based-processes.html">
      <div
        class="flex items-end justify-end w-full bg-cover h-56"
        :class="[
          featured ?
            'featured-post-cover' :
            ''
        ]"
        :style="'background-image: url(' + cover + ')'"
      />
      <div class="px-5 py-3">
        <h3 class="text-gray-700 uppercase">{{ title }}</h3>
        <div class="text-gray-500 mt-2">
          {{ description }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'BlogCard',
  props: {
    title: {
      type: String,
      default: 'Blog Title'
    },
    description: {
      type: String,
      default: 'Blog Description'
    },
    cover: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.featured-post-cover {
  @media (min-width: 1024px) {
    height: 32rem;
  }
}
</style>
