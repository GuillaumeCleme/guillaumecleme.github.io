<template>
  <li class="py-1">
    <div class="flex items-center">
      <div>
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
          <font-awesome-icon :icon="icon" class="fa-fw" />
        </span>
      </div>
      <div>
        <h4 class="text-gray-700">
          {{ skill }}
        </h4>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SkillListItem',
  props: {
    skill: String,
    icon: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
