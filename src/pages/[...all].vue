<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: 'Not Found',
  meta: [
    { name: 'description', content: 'Not Found', id: 'desc' },
  ],
})
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
