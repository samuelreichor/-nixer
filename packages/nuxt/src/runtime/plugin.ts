import { Nixer, type NixerOptions } from '@nixer/vue'
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const { craftcms } = useRuntimeConfig().public
  nuxtApp.vueApp.use(Nixer, { ...(craftcms as NixerOptions) })
})