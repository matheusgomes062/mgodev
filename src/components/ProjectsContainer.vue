<script setup lang="ts">
import uniqid from 'uniqid'

const { t } = useI18n()

defineProps({
  name: { type: String, required: true },
  description: String,
  stack: Array,
  sourceCode: String,
  livePreview: String,
})
</script>

<template lang="pug">
div(class="p-8 mx-auto text-center shadow-lg transition-transform ease-in cursor-pointer transform transition-transform duration-150 ease-linear hover:scale-102" style="box-shadow: var(--shadow)")
  h3(class="font-bold") {{ t(name) }}
  p(v-if="description" class="mt-4") {{ t(description) }}
  ul(v-if="stack" class="flex flex-wrap font-medium text-sm justify-center my-4")
    li(class="project__stack-item" :key="uniqid()" v-for="item in stack") {{ item }}

  a(v-if="sourceCode" class="link link--icon ml-1 text-xl p-0")
    i-mdi-github
  a(v-if="livePreview" class="link link--icon ml-1 text-xl p-0")
    i-mdi-launch
</template>

<style>
.project__stack-item {
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--clr-fg-alt);
}
</style>
