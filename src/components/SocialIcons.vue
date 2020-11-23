<template>
  <div name="socialicons">
    <SocialIcon v-for="icon in socialIcons"
      v-bind:key="icon.key"
      v-bind:href="icon.href"
      v-bind:label="icon.label"
      v-bind:icon="icon.icon"
      v-bind:appearance="appearance"/>
  </div>
</template>

<script>
import SocialIcon from './SocialIcon.vue'

export default {
  name: 'SocialIcons',
  components: {
    SocialIcon
  },
  props: {
    appearance: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
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
