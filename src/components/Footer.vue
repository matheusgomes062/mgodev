<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { header } from '~/portfolio'
const { homepage } = header
</script>

<template lang="pug">
footer(class="py-12 mt-16 flex justify-center text-center" role="contentinfo")
  a(:href="homepage" class="text-base font-semibold p-0 link flex flex-row items-center" style="color: var(--clr-fg)")
    p(class=" mr-2") Created by Matheus Gomes
    Icon(icon="twemoji:red-heart" class="cursor-pointer")
</template>
