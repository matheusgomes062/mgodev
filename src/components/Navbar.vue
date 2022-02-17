<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template lang="pug">
nav(class="flex items-center")
  ul(class="flex mr-4")
    li(class="my-2 ml-4")
      a(class="relative pb-1 cursor-pointer link link--nav") projects
    li(class="my-2 ml-4")
      a(class="relative pb-1 cursor-pointer link link--nav") skills
    li(class="my-2 ml-4")
      a(class="relative pb-1 cursor-pointer link link--nav") contact
    li(class="my-2 ml-4")
      a(class="relative pb-1 cursor-pointer link link--nav text-xl" @click="toggleDark()")
        i-mdi-white-balance-sunny(v-if="isDark")
        i-ic-round-mode-night(v-else)
    li(class="my-2 ml-4")
      a(class="relative pb-1 cursor-pointer link link--nav text-xl")
        i-mdi-translate
</template>
