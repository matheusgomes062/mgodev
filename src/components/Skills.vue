<script setup lang="ts">
import { skills } from '~/portfolio'
const { t } = useI18n()
</script>

<template lang="pug">
section(class="section" id="skills" aria-labelledby="skills-title" role="region")
  h2(class="section__title font-bold" id="skills-title") {{ t('intro.skills') }}
  ul(class="max-w-1100px w-full mx-auto flex flex-wrap justify-center")
    li(class="m-2 btn btn--plain" v-for="skill in skills") {{ skill }}
</template>

<style>
</style>
