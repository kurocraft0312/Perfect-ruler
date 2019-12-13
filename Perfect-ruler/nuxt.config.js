
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: https://ogp.me/ns#'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'kurocraft0312' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'キーワード' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no,email=no,address=no' },
      { hid: 'msapplication-config', name: 'msapplication-config', content: '/browserconfig.xml' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: 'Win8+用のタイルカラー' },
      { hid: 'msapplication-TitleImage', name: 'msapplication-TitleImage', content: 'Win8+用のタイル画像' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { hid: 'og:url', property: 'og:url', content: '/' },
      { hid: 'og:title', property: 'og:title', content: 'Perfect-ruler' },
      { hid: 'og:description', property: 'og:description', content: '文章制作用のテンプレートです。'},
      { hid: 'og:image', property: 'og:image', content: '.jpg' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'OGP画像の説明' },
      { hid: 'og:local', property: 'og:local', content: 'ja_JP' },
      { property: 'article:publisher', content: 'FBのURL' },
      { property: 'fb:app_id', content: 'FBのAppID' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@kurocraft7522' },
      { name: 'twitter:image', content: 'OGP画像のURL' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
