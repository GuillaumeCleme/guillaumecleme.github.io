<template>
  <section id="myfocus" class="mt-40 relative bg-gray-200">
    <SlopeSeparator direction="asc" fill-color="text-gray-200" />
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <ProfileCard />
        <FocusDetails />
      </div>
    </div>
  </section>
</template>

<script>
import SlopeSeparator from '@/components/Sections/Fragments/SlopeSeparator.vue'
import ProfileCard from '@/components/Cards/ProfileCard.vue'
import FocusDetails from '@/components/Sections/Fragments/FocusDetails.vue'

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
