<template>
  <li class="mb-2">
    <div class="flex items-center mb-1">
      <div class="bg-blue-400 rounded-full h-8 w-8" :class="index == 0 ? '-mt-5 sm:mt-0' : ''" />
      <div class="flex-1 ml-4 font-medium">
        {{ title }} &#8226;
        <span class="font-light">{{ timeline }}</span>
      </div>
    </div>
    <div class="ml-12">
      {{ desc }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'ExperienceTimelineItem',
  props: {
    index: Number,
    title: String,
    timeline: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
