import type { App } from 'vue'
import NixerJs from './components/NixerJs.vue'

export { NixerJs }

export type NixerOptions = {
  text: string
}
export const defaultOptions: NixerOptions = {
  text: '',
}

export const Nixer = {
  install(app: App, options: NixerOptions = defaultOptions) {
    const mergedOptions: NixerOptions = { ...defaultOptions, ...options }
    app.component('NixerJs', NixerJs)
    app.provide('NixerOptions', mergedOptions)
  },
}