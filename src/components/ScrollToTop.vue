<script setup lang="ts">
let scrollToTopIsVisible = false

const moveUp = () => {
  window.scrollTo(0, 0)
  scrollToTopIsVisible = false
}
</script>

<template lang="pug">
div(class="scroll-top" v-if="scrollToTopIsVisible")
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
