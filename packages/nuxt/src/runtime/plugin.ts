import { Nixer, type NixerOptions } from '@nixer/vue'
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const { nixer } = useRuntimeConfig().public
  nuxtApp.vueApp.use(Nixer, { ...(nixer as NixerOptions) })
})