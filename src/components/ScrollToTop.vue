<script setup lang="ts">
import { useSiteStore } from '~/stores/site'

const siteStore = useSiteStore()

const moveUp = () => {
  window.scrollTo(0, 0)
  siteStore.setScrollToTop(false)
}
</script>

<template lang="pug">
div(class="scroll-top btn btn--plain" v-if="siteStore.scrollToTopIsVisible")
  a(href="#" @click="moveUp")
    i-mdi-arrow-up(class="text-3xl")
</template>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  bottom: 2em;
  right: 4em;
  border-radius: 100%;
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.38);
  background-color: var(--clr-bg-alt);

  a {
    color: var(--clr-fg-alt);
  }
}

@media (max-width: 900px) {
  .scroll-top {
    display: none;
  }
}
</style>
