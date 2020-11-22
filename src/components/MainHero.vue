<template>
  <section class="header relative pt-16 items-center flex h-screen" style="max-height:860px">
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-5xl text-gray-800">Hi there! I'm Guillaume.</h2>
            <p class="mt-4 text-lg leading-relaxed text-gray-700">
              I am an experienced technology professional with over 10 years of technical experience as an analyst, lead developer, architect, and director specializing in enterprise technology.
            </p>
            <div class="mt-12">
              <ul class="text-5xl list-none text-gray-800">
                <SocialIcon v-for="icon in socialIcons"
                  v-bind:key="icon.key"
                  v-bind:href="icon.href"
                  v-bind:label="icon.label"
                  v-bind:icon="icon.icon" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img class="absolute top-0 b-auto right-0 -mt-12 sm:mt-0 sm:w-6/12 w-10/12 z-0"
        src="../assets/img/blue-geo-background-crop.png"
        alt="Background Graphic - Blue Triangles" style="max-height:1000px" />
    </section>
</template>

<script>
import SocialIcon from './SocialIcon.vue'

export default {
  name: 'MainHero',
  components: {
    SocialIcon
  },
  data: function () {
    return {
      socialIcons: [
        { href: 'https://www.linkedin.com/in/guillaumecleme', label: 'LinkedIn', icon: ['fab', 'linkedin-in'] },
        { href: 'https://twitter.com/guillaumecleme', label: 'Twitter', icon: ['fab', 'twitter'] },
        { href: 'https://www.facebook.com/guillaume.e.clement', label: 'FaceBook', icon: ['fab', 'facebook-f'] },
        { href: 'https://www.instagram.com/guillaumecle.me/', label: 'Instagram', icon: ['fab', 'instagram'] },
        { href: 'https://m.me/guillaume.e.clement', label: 'Messenger', icon: ['fab', 'facebook-messenger'] },
        { href: 'https://github.com/guillaumecleme', label: 'GitHub', icon: ['fab', 'github'] },
        { href: 'https://stackoverflow.com/users/3308078/guillaumecle.me', label: 'Stack Overflow', icon: ['fab', 'stack-overflow'] },
        { href: 'https://www.youracclaim.com/users/guillaumecleme', label: 'Adobe/Acclaim', icon: ['fab', 'adobe'] },
        { href: 'https://www.goodreads.com/guillaumecleme', label: 'Goodreads', icon: ['fab', 'goodreads'] }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
