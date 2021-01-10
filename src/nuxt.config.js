export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    dir: 'dist',
    subFolders: false
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
      xmlns: 'http://www.w3.org/1999/xhtml',
      'xmlns:fb': 'http://ogp.me/ns/fb#'
    },
    headAttrs: {
      prefix: 'og: http://ogp.me/ns# profile: http://ogp.me/ns/profile#'
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
      { rel: 'shortcut icon', type: 'image/png', href: '/coffee.png', sizes: '64x64', alt: 'Coffee Cup' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/coffee.png', sizes: '76x76', alt: 'Coffee Cup' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })

        config.module.rules.push({
          test: /\.(pdf|txt|xml|ico|md)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        })
      }
    }
  },

  googleAnalytics: {
    id: 'UA-141950820-1'
  },

  fontawesome: {
    icons: {
      brands: [
        'faLinkedinIn',
        'faTwitter',
        'faFacebookF',
        'faInstagram',
        'faFacebookMessenger',
        'faGithub',
        'faStackOverflow',
        'faAdobe',
        'faGoodreads'
      ],
      solid: [
        'faAddressCard',
        'faArrowAltCircleDown',
        'faBars',
        'faBook',
        'faBriefcase',
        'faCode',
        'faHandshake',
        'faRedo',
        'faRocket',
        'faUserTie',
        'faMapMarkerAlt'
      ]
    }
  }
}
