<script setup lang="ts">
import { contact } from '~/portfolio'
const { t } = useI18n()

</script>

<template lang="pug">
section(class="section flex flex-col justify-center items-center" id="contact" aria-labelledby="contact-title" role="region")
  h2(class="section__title" id="contact-title") {{ t('intro.contact') }}
  a(:href="`mailto: ${contact.email}`" class="")
    span(type="button" :aria-label="t('intro.contact')" class="btn btn--outline rounded-md") Email me
</template>
