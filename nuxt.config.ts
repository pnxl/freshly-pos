// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  runtimeConfig: {
    public: {
      databaseUrl: "",
      anonymousApikey: "",
      locale: "",
      currency: "",
      imageBucket: "",
    },
  },
});
