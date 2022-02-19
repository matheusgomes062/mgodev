<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template lang="pug">
nav(class="flex items-center")
  ul(class="flex mr-6")
    li(class="ml-6")
      a(class="relative pb-1 cursor-pointer link link--nav p-0") {{t('intro.projects')}}
    li(class="ml-6")
      a(class="relative pb-1 cursor-pointer link link--nav p-0") {{t('intro.skills')}}
    li(class="ml-6")
      a(class="relative pb-1 cursor-pointer link link--nav p-0") {{t('intro.contact')}}
    li(class="ml-6")
      a(class="relative pb-1 cursor-pointer link link--nav p-0 text-xl" @click="toggleDark()")
        i-mdi-white-balance-sunny(v-if="isDark")
        i-ic-round-mode-night(v-else)
    li(class="ml-6" @click="toggleLocales")
      a(class="relative pb-1 cursor-pointer link link--nav text-xl")
        i-mdi-translate
</template>
