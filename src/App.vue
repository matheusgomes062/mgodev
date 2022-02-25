<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'mgodev',
  meta: [
    { name: 'description', content: 'Portfolio made to showcase Matheus Gomes knowledge. This site was made using a variety of modern technologies!' },
  ],
})
</script>

<template>
  <router-view />
</template>
