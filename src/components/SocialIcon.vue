<template>
  <li class="inline-block mr-2 hover:text-gray-600">
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
    icon: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
