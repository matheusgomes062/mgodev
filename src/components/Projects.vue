<script setup lang="ts">
import { projects } from '~/portfolio'
const { t } = useI18n()

</script>

<template lang="pug">
section.section
  h2.section__title {{ t('intro.projects') }}
  div(class="projects__grid")
    ProjectsContainer(
      v-for="project in projects"
      :name="project.name"
      :description="project.description"
      :stack="project.stack"
      :sourceCode="project.sourceCode"
      :livePreview="project.livePreview")
</template>

<style>
.projects__grid {
    grid-gap: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(18em,1fr));
    margin: 0 auto;
    max-width: 1100px;
}
</style>
