export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      'primeflex/primeflex.css',
      'assets/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'mixins/index',
    'plugins/vee-validate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  primevue: {
    theme: 'saga-blue',
    ripple: true,
    components: ['InputText','Button', 'Toast','Card','Fieldset','MegaMenu','Menu',
                'DataTable','Column','ColumnGroup','Row','Checkbox','ProgressSpinner',
                'Toast','Dialog','Dropdown','ConfirmDialog','Avatar','SplitButton','Breadcrumb',
                'Divider'
                ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login : {
            url: '/login'
          },
          logout: {
            url: '/logout'
          },
          // user: {
          //   url: 'api/user'
          // },
        },
        // user: {
        //   property:false
        // }
      },
      
    },
    redirect: {
      login:'/login',
      home:'/dashboard'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000',
    credentials:true
  },
  router: {
    // middleware: ['class'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue','vee-validate'],
  }
}
