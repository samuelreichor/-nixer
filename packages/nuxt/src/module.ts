import { addPlugin, defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import { defaultOptions, type NixerOptions } from '@nixer/vue'

export default defineNuxtModule<Required<NixerOptions>>({
  meta: {
    name: '@nixer/nuxt',
    configKey: 'nixer',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: defaultOptions,
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Load options in runtime config
    nuxt.options.runtimeConfig.public.nixer = options

    // Add core plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add auto imports for components
    const componentes = ['NixerJs']

    for (const name of componentes) {
      addComponent({
        name: name,
        export: name,
        filePath: '@nixer/vue',
      })
    }
  },
})