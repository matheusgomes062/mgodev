<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useSiteStore } from '~/stores/site'

const siteStore = useSiteStore()
const onScroll = () => {
  window.pageYOffset > 500 ? siteStore.setScrollToTop(true) : siteStore.setScrollToTop(false)
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <main @scroll.passive="onScroll">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>
