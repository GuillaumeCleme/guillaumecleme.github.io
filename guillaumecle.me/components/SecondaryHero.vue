<template>
  <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 75vh;">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover cover-image"
    >
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black" />
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              Welcome to my Blog.
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              This is a space I use to share my thoughts around Product, Methodology, and Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondaryHero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cover-image{
  background-image: url("../assets/img/unsplash-NuFUbftUu_s-unsplash.jpg");
}
</style>
