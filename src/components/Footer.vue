<script setup lang="ts">
import { header } from '~/portfolio'
const { homepage } = header
</script>

<template lang="pug">
footer(class="py-12 mt-16 flex justify-center text-center")
  a(:href="homepage" class="link text-base font-semibold mr-2 p-0" style="color: var(--clr-fg)").
    Created by Matheus Gomes ❤
</template>
