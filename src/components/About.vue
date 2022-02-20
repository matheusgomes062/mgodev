<script setup lang="ts">
import { about } from '~/portfolio'
const { t } = useI18n()

const { name, role, description, resume, social } = about
</script>

<template lang="pug">
div(class="flex flex-col items-center mt-12 text-center")
  h1(v-if="name" class="font-bold") {{ t('about.hi i am') }} <br/> {{ name }}

  h2(v-if="role" class="mt-6") {{ t('about.i am') }} {{ t(role) }}

  p(v-if="description" class="mt-10 text-center flex max-w-660px") {{ t(description) }}

  div(class="mt-6 text-center flex flex-row items-end justify-center")
    a(v-if="resume" :href="t(resume)" class="cursor-pointer mr-2")
      span(type="button" class="btn btn--outline").
        {{ t('about.resume') }}
    a(v-if="social.github" :href="social.github" class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-github
    a(v-if="social.stackoverflow" :href="social.stackoverflow" class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-stack-overflow
    a(v-if="social.linkedin" :href="social.linkedin" class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-linkedin
    a(v-if="social.devto" :href="social.devto" class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-dev-to
    a(v-if="social.medium" :href="social.medium" class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-medium
</template>
