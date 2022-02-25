<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { skills } from '~/portfolio'
const { t } = useI18n()
</script>

<template lang="pug">
section(class="section" id="skills" aria-labelledby="skills-title" role="region")
  h2(class="section__title font-bold" id="skills-title") {{ t('intro.skills') }}
  ul(class="max-w-1100px w-full mx-auto flex flex-wrap justify-center")
    li(class="m-2 btn btn--plain flex flex-row items-center rounded-md" v-for="skill in skills")
      p(class="mr-3") {{ skill.name }}
      Icon(:icon="skill.icon" height="24")
</template>

<style>
</style>
