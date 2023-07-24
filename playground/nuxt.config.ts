
export default defineNuxtConfig({
  modules: ['../src/module'],
  app: {
    baseURL: process.env.BASE_URL || '/',
  },
  css: ['~/assets/font.css'],
  ssr: true,
  vuetify: {
    moduleOptions: {
      styles: { configFile: '/main.scss' },
      treeshaking: true,
      useVuetifyLabs: true
    },
  },
})
