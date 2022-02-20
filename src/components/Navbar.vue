<script setup lang="ts">
import { useSiteStore } from '~/stores/site'
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const siteStore = useSiteStore()

const toggleNavList = () => {
  siteStore.toggleNavList(!siteStore.showNavList)
}
</script>

<template lang="pug">
nav(class="center nav")
  ul(class="nav__list" :style="[ siteStore.showNavList ? 'display: flex': '' ]")
    li(class="nav__list-item")
      a(href="#projects" class="link link--nav" @click="toggleNavList") {{t('intro.projects')}}
    li(class="nav__list-item")
      a(href="#skills" class="link link--nav" @click="toggleNavList") {{t('intro.skills')}}
    li(class="nav__list-item")
      a(href="#contact" class="link link--nav" @click="toggleNavList") {{t('intro.contact')}}
  button(class="nav__theme" @click="toggleDark()")
      i-mdi-white-balance-sunny(v-if="isDark")
      i-ic-round-mode-night(v-else)
  button(class="nav__theme" @click="toggleLocales")
      i-mdi-translate
  button(type="button" @click="toggleNavList" class="btn btn--icon nav__hamburger")
    i-mdi-menu(v-if="!siteStore.showNavList")
    i-mdi-close(v-else)

</template>

<style scoped>
.nav__list {
  margin-right: 1.5em;
  display: flex;
}
.nav__list-item {
  margin-left: 1.5em;
}

.nav__hamburger {
  display: none;
}

.nav__theme {
  margin-top: 0.4em;
  margin-right: 1.5em;
}

@media (max-width: 600px) {
  .nav__list {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .nav__list-item {
    margin: 0.5em 0;
  }

  .nav__hamburger {
    display: flex;
    z-index: 2;
    margin-left: 0.8em;
  }
}

</style>
