<template>
  <a
    class="download-button items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
    :href="href"
    download
  >
    <span class="text-lg leading-lg">
      <font-awesome-icon :icon="['fas', 'arrow-alt-circle-down']" />
    </span>
    <span class="ml-2">Download My Resume</span>
  </a>
</template>

<script>
export default {
  name: 'DownloadResumeButton',
  props: {
    href: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
