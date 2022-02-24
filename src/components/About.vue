<script setup lang="ts">
import { ref } from 'vue'
import { about } from '~/portfolio'
const { t } = useI18n()

const { name, role, description, resume, social } = about

const card = ref()

const dataImage = about.bg_image

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${dataImage})`,
  }
})
</script>

<template lang="pug">
section(class="card-wrap" aria-labelledby="about-title" role="region" ref="card" data-tilt)
  div(class="card")
    div(class="card-bg" :style="cardBgImage")
    div(class="card-info")
      h1(v-if="name" class="font-bold text-5xl" id="about-title") {{ t('about.hi_i_am') }} <br/>
      h1(class="font-bold cool-gradient-title") {{ name }}

      h2(v-if="role" class="mt-6") {{ t('about.i_build') }}

      p(v-if="description" class="mt-10 text-left flex max-w-660px") {{ t(description) }}

      div(class="mt-6 text-center flex flex-row items-end justify-start link-div")
        a(v-if="resume" :href="t(resume)" class="cursor-pointer mr-2" :aria-label="t('about.resume')")
          span(type="button" class="btn btn--outline").
            {{ t('about.resume') }}
        a(v-if="social.github" aria-label="github" :href="social.github" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-github
        a(v-if="social.stackoverflow" aria-label="stackoverflow" :href="social.stackoverflow" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-stack-overflow
        a(v-if="social.linkedin" aria-label="linkedin" :href="social.linkedin" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-linkedin
        a(v-if="social.devto" aria-label="devto" :href="social.devto" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-dev-to
        a(v-if="social.medium" aria-label="medium" :href="social.medium" class="link link--icon text-3xl  mr-2 p-0")
          i-mdi-medium

    //- div(class="profile-container hexagon")
    div(class="profile")
</template>

<style scoped lang="scss">
@import './styles/about.scss';

.cool-gradient-title {
background-image: linear-gradient(
  90deg,
  hsl(193deg 71% 56%) 0%,
  hsl(197deg 100% 46%) 11%,
  hsl(204deg 100% 48%) 22%,
  hsl(211deg 100% 49%) 33%,
  hsl(219deg 100% 47%) 44%,
  hsl(249deg 75% 56%) 56%,
  hsl(260deg 76% 55%) 67%,
  hsl(269deg 77% 53%) 78%,
  hsl(278deg 77% 50%) 89%,
  hsl(286deg 100% 44%) 100%
);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
