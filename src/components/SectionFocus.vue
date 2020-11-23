<template>
  <section id="myfocus" class="mt-40 relative bg-gray-200">
    <SlopeSeparator direction="asc" fillColor="text-gray-200"/>
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <ProfileCard />
        <FocusDetails />
      </div>
    </div>
  </section>
</template>

<script>
import SlopeSeparator from './SlopeSeparator.vue'
import ProfileCard from './ProfileCard.vue'
import FocusDetails from './FocusDetails.vue'

export default {
  name: 'SectionFocus',
  components: {
    SlopeSeparator,
    ProfileCard,
    FocusDetails
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
