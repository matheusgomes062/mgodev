<script setup lang="ts">

</script>

<template lang="pug">
div(class="scroll-top")
  a(href="#")
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
