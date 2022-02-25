<script setup lang="ts">
import { projects } from '~/portfolio'
const { t } = useI18n()

function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
await delay()
</script>

<template lang="pug">
section(class="section" aria-labelledby="projects" role="region")
  h2(class="section__title" id="projects") {{ t('intro.projects') }}
  div(class="projects__grid")
    ProjectsContainer(
      v-for="(project, index) in projects"
      :name="project.name"
      :description="project.description"
      :stack="project.stack"
      :sourceCode="project.sourceCode"
      :livePreview="project.livePreview"
      :bgImage="project.bgImage"
      :style="`animation-delay: 0.${ index }s;`")
</template>

<style>
.projects__grid {
    grid-gap: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(18em,1fr));
    margin: 0 auto;
    max-width: 1100px;
}

.delay { animation-delay: 0.6s; }
</style>
