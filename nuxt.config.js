
export default {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/axios-accessor" }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ["@nuxt/typescript-build"],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios"
  ],
  /*
  ** Build configuration
  */
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|ts|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      });
    }
  },
  typescript: {
    typeCheck: {
      eslint: true
    },
    ignoreNotFoundWarnings: true
  }
};

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: "/spreadsheeter/"
  }
} : {}
export default {
  ...routerBase
}