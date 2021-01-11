<template>
  <div class="w-9/12 md:w-5/12 ml-auto mr-auto px-4 pt-16 sm:pt-0">
    <div class="md:pr-12">
      <div class="text-xl text-blue-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
      </div>
      <h3 class="text-3xl font-semibold">
        My Focus.
      </h3>
      <p class="mt-4 text-md leading-relaxed text-gray-700">
        I spend most of my time applying my technical and management skills to larger teams to efficiently develop and deliver scalable solutions using iterative methodologies.
      </p>
      <ul class="list-none mt-6">
        <SkillListItem
          v-for="skill in skills"
          :key="skill.key"
          :skill="skill.name"
          :icon="skill.icon"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SkillListItem from '@/components/Sections/Fragments/SkillListItem.vue'

export default {
  name: 'FocusDetails',
  components: {
    SkillListItem
  },
  data () {
    return {
      skills: [
        { name: 'Technical Leadership', icon: ['fas', 'user-tie'] },
        { name: 'Product & Solution Development', icon: ['fas', 'rocket'] },
        { name: 'AGILE Project & Program Management', icon: ['fas', 'redo'] },
        { name: 'Full-Stack Technical Implementation & Architecture', icon: ['fas', 'code'] },
        { name: 'Professional Development', icon: ['fas', 'handshake'] }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
