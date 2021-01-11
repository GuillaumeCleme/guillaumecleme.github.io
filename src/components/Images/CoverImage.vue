<template>
  <div>
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      :style="'background-image: url(' + cover + ')'"
    >
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverImage',
  props: {
    cover: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
