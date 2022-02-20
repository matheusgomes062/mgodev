<script setup lang="ts">
import { useSiteStore } from '~/stores/site'

const siteStore = useSiteStore()

const moveUp = () => {
  window.scrollTo(0, 0)
  siteStore.setScrollToTop(false)
}
</script>

<template lang="pug">
div(class="scroll-top" v-if="siteStore.scrollToTopIsVisible")
  a(href="#" @click="moveUp")
    i-mdi-arrow-up(class="text-3xl")
</template>

<style>
.scroll-top {
  position: fixed;
  bottom: 2em;
  right: 4em;
  background-color: transparent;
}

@media (max-width: 900px) {
  .scroll-top {
    display: none;
  }
}
</style>
