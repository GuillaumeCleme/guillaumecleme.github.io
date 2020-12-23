<template>
  <li class="nav-item text-gray-800 hover:text-gray-600">
    <NuxtLink
      :to="href"
      class="px-3 py-2 flex items-center text-xs uppercase font-bold"
    >
      <div class="text-lg leading-lg">
        <font-awesome-icon :icon="icon" />
      </div>
      <span class="ml-2">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
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
