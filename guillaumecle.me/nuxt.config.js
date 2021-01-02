export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'guillaumecle.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@nuxtjs/tailwindcss'
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
