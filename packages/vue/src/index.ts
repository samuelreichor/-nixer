import type { App } from 'vue'
import NixerJs from './components/NixerJs.vue'
import type { NixxerOptions } from '@nixxer/js'

export { NixerJs }
export type { NixxerOptions }
export const defaultOptions: NixxerOptions = {
  text: '',
}

export const Nixer = {
  install(app: App, options: NixxerOptions = defaultOptions) {
    const mergedOptions: NixxerOptions = { ...defaultOptions, ...options }
    app.component('NixerJs', NixerJs)
    app.provide('NixerOptions', mergedOptions)
  },
}