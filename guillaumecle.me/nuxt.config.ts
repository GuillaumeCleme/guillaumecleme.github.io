// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-light',
      preload: [
        'java'
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      htmlAttrs: {
        lang: 'en',
        xmlns: 'http://www.w3.org/1999/xhtml',
        'xmlns:fb': 'http://ogp.me/ns/fb#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'author', content: 'Guillaume Clement' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:site_name', content: 'Guillaume Clement' },
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:url', content: 'https://guillaumecle.me' },
        { name: 'og:type', content: 'profile' },
        { name: 'profile:first_name', content: 'Guillaume' },
        { name: 'profile:last_name', content: 'Clement' },
        { name: 'profile:gender', content: 'male' },
        { name: 'profile:username', content: '&#064;GuillaumeCleme' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '&#064;GuillaumeCleme' },
        { name: 'theme-color', content: '#1a202c' },
        { name: 'msapplication-navbutton-color', content: '#1a202c' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
      ],
      link: [
        { rel: 'canonical', href: 'https://guillaumecle.me' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/png', href: '/coffee.png', sizes: '64x64' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/coffee.png', sizes: '76x76' }
      ]
    },
  }
})
