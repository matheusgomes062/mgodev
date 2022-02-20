<script setup lang="ts">
import { skills } from '~/portfolio'
const { t } = useI18n()
</script>

<template lang="pug">
section(class="section")
  h2(class="section__title font-bold") {{ t('intro.skills')}}
  ul(class="max-w-450px w-95 mx-auto flex flex-wrap justify-center")
    li(class="m-2 btn btn--plain" v-for="skill in skills") {{ skill }}
</template>
