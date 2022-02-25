<script setup lang="ts">
import uniqid from 'uniqid'

const { t } = useI18n()

const props = defineProps({
  name: { type: String, required: true },
  description: String,
  stack: Array,
  sourceCode: String,
  livePreview: String,
  bgImage: String,
})

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${props.bgImage})`,
  }
})
</script>

<template lang="pug">
div(class="card-wrap")
  div(class="card h-lg")
    div(class="card-bg" :style="cardBgImage")
    div(class="card-info py-8 px-4 mx-auto text-start h-full flex flex-col justify-between")
      h3(class="font-bold") {{ t(props.name) }}
      p(v-if="props.description" class="mt-4") {{ t(props.description) }}
      div(class="flex flex-wrap w-full stack-container")
        h5(for="stack" class="text-sm ml-1 font-bold") {{ t('projects.tech_used') }}
        ul(v-if="props.stack" id="stack" class="flex flex-wrap w-full text-xs justify-start my-2")
          li(class="project__stack-item" :key="uniqid()" v-for="item in props.stack") {{ item }}

      div(class="flex flex-row w-full justify-start" style="background-color: transparent;")
        a(v-if="props.sourceCode" aria-label="source-code" class="link link--icon ml-1 text-xl p-0" :href="props.sourceCode")
          i-mdi-github
        a(v-if="props.livePreview" aria-label="live-preview" class="link link--icon ml-1 text-xl p-0" :href="props.livePreview")
          i-mdi-launch
</template>

<style lang="scss" scoped>
@import 'styles/projects-container.scss'

</style>
