<script setup lang="ts">
  import {js} from '@nixer/js'
  import { inject } from 'vue'

  const text = inject<string>('NixerOptions') ?? ''
</script>

<template>
  <h1>{{ js(text) }}</h1>
</template>