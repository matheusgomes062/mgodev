<script setup lang="ts">
import { header } from '~/portfolio'

const { homepage, title } = header

</script>

<template lang="pug">
div(class="cool-header")
header(class="h-32 max-w-1100px justify-between flex flex-row items-center mx-auto w-95/100")
  h3
    a(:href="homepage" class="link font-bold p-0") {{ title }}
  Navbar
</template>

<style scoped lang="scss">

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

.cool-header{
  position: relative;
  height: 5px;
  background: linear-gradient(
    90deg,
    hsl(193deg 71% 56%) 0%,
    hsl(197deg 100% 46%) 11%,
    hsl(204deg 100% 48%) 22%,
    hsl(211deg 100% 49%) 33%,
    hsl(219deg 100% 47%) 44%,
    hsl(249deg 75% 56%) 56%,
    hsl(260deg 76% 55%) 67%,
    hsl(269deg 77% 53%) 78%,
    hsl(278deg 77% 50%) 89%,
    hsl(286deg 100% 44%) 100%
  );
}
</style>
