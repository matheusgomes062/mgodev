<script setup lang="ts">
</script>

<template lang="pug">
About
Suspense
  template(#default)
    Projects
  template(#fallback)
    ProgressBar(height="30em")
Skills
Contact
ScrollToTop
</template>

<route lang="yaml">
meta:
  layout: home
</route>
