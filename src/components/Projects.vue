<script setup lang="ts">
</script>

<template lang="pug">
section.section
  h2.section__title
  div(class="projects__grid")
    ProjectsContainer
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
