<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useSiteStore } from '~/stores/site'

const siteStore = useSiteStore()
const onScroll = () => {
  window.pageYOffset > 500 ? siteStore.setScrollToTop(true) : siteStore.setScrollToTop(false)
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template lang="pug">
<!-- Aria skip link -->
a(href='#main' class="skipLink" ref='skipLink') Skip to main content
Header
main(@scroll.passive="onScroll" id="main" role="main")
  router-view()
Footer
</template>

<style>
.skipLink {
  position: absolute;
  transform: translateY(-200%);
  transition: transform 0.3s;
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  /* position: fixed; */
  left: 50%;
  height: 30px;
  margin-left: -72px;
  opacity: 0;
}

.skipLink:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
  transform: translateY(0%);
}
</style>
