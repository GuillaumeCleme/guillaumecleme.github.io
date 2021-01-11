<template>
  <div name="socialicons">
    <SocialIcon
      v-for="icon in socialIcons"
      :key="icon.key"
      :href="icon.href"
      :label="icon.label"
      :icon="icon.icon"
      :appearance="appearance"
    />
  </div>
</template>

<script>
import SocialIcon from '@/components/SocialIcon.vue'

export default {
  name: 'SocialIcons',
  components: {
    SocialIcon
  },
  props: {
    appearance: {
      type: String,
      validator (value) {
        // The value must match one of these strings
        return ['light', 'dark'].includes(value)
      }
    }
  },
  data () {
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
