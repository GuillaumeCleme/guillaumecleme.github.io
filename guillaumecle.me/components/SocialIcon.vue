<template>
  <li class="inline-block mr-2" :class="appearance == 'light' ? 'hover:text-gray-600' : 'hover:text-gray-700'">
    <a :href="href" target="_blank" rel="noreferrer" :aria-label="label">
      <font-awesome-icon :icon="icon" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    href: String,
    label: String,
    icon: Array,
    appearance: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
