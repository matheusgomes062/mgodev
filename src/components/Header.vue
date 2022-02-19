<script setup lang="ts">
import { header } from '~/portfolio'

const { homepage, title } = header

</script>

<template lang="pug">
header(class="h-32 max-w-1100px justify-between flex flex-row items-center mx-auto")
  h3
    a(:href="homepage" class="link font-bold p-0") {{ title }}
  Navbar
</template>
