<script setup lang="ts">
  import { js } from '@nixxer/js'
  import { inject } from 'vue'
  import { NixerOptions } from '..';

  const options = inject<NixerOptions>('NixerOptions') ?? { text: 'nothing provided' }
</script>

<template>
  <h1>{{ js(options.text) }}</h1>
</template>