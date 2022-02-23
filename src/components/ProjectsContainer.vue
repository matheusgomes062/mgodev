<script setup lang="ts">
// import { ref } from 'vue'
import uniqid from 'uniqid'

const { t } = useI18n()

defineProps({
  name: { type: String, required: true },
  description: String,
  stack: Array,
  sourceCode: String,
  livePreview: String,
})

// VanillaTilt.init(document.querySelector('.card'))
// const card = ref()
// VanillaTilt.init(document.querySelector('.cardTilt'))
// VanillaTilt.init(card.value)
</script>

<template lang="pug">
div(class="transition-transform ease-in transform transition-transform duration-150 ease-linear hover:scale-102 animate grow cardTilt")
  div(class="card p-8 mx-auto text-center h-full flex flex-col justify-between")
    div(class="header")
      h3(class="font-bold") {{ t(name) }}
      p(v-if="description" class="mt-4") {{ t(description) }}
    div(slot="content")
      ul(v-if="stack" class="flex flex-wrap font-medium text-sm justify-center my-4")
        li(class="project__stack-item" :key="uniqid()" v-for="item in stack") {{ item }}

      div(class="flex flex-row justify-center")
        a(v-if="sourceCode" aria-label="source-code" class="link link--icon ml-1 text-xl p-0" :href="sourceCode")
          i-mdi-github
        a(v-if="livePreview" aria-label="live-preview" class="link link--icon ml-1 text-xl p-0" :href="livePreview")
          i-mdi-launch
</template>

<style lang="scss" scoped>
@import 'styles/projects-container.scss'

</style>
