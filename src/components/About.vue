<script setup lang="ts">
import { ref } from 'vue'
import { about } from '~/portfolio'
const { t } = useI18n()

const { name, role, description, resume, social } = about

const card = ref()

const dataImage = about.bg_image

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${dataImage})`,
  }
})
</script>

<template lang="pug">
section(class="card-wrap" aria-labelledby="about-title" role="region" ref="card")
  div(class="card")
    div(class="card-bg" :style="cardBgImage")
    div(class="card-info")
      h1(v-if="name" class="font-bold text-5xl" id="about-title") {{ t('about.hi_i_am') }} <br/>
      h1(class="font-bold") {{ name }}

      h2(v-if="role" class="mt-6") {{ t('about.i_build') }}

      p(v-if="description" class="mt-10 text-left flex max-w-660px") {{ t(description) }}

      div(class="mt-6 text-center flex flex-row items-end justify-start")
        a(v-if="resume" :href="t(resume)" class="cursor-pointer mr-2" :aria-label="t('about.resume')")
          span(type="button" class="btn btn--outline").
            {{ t('about.resume') }}
        a(v-if="social.github" aria-label="github" :href="social.github" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-github
        a(v-if="social.stackoverflow" aria-label="stackoverflow" :href="social.stackoverflow" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-stack-overflow
        a(v-if="social.linkedin" aria-label="linkedin" :href="social.linkedin" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-linkedin
        a(v-if="social.devto" aria-label="devto" :href="social.devto" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-dev-to
        a(v-if="social.medium" aria-label="medium" :href="social.medium" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-medium
</template>

<style scoped lang="scss">
@import './styles/card-parallax.scss'
</style>
