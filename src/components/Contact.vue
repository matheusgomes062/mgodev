<script setup lang="ts">
import { contact } from '~/portfolio'
const { t } = useI18n()

</script>

<template lang="pug">
section(class="section flex flex-col justify-center items-center")
  h2(class="section__title") {{ t('intro.contact') }}
  a(:href="`mailto: ${contact.email}`" class="cursor-pointer")
    span(type="button" class="btn btn--outline") Email me
</template>
