<script setup lang="ts">
import uniqid from 'uniqid'

const { t } = useI18n()

defineProps({
  name: { type: String, required: true },
  description: String,
  stack: Array,
  sourceCode: String,
  livePreview: String,
})
</script>

<template lang="pug">
div(class="p-8 mx-auto text-center shadow-lg transition-transform ease-in cursor-pointer transform transition-transform duration-150 ease-linear hover:scale-102 animate glow" style="box-shadow: var(--shadow)")
  h3(class="font-bold") {{ t(name) }}
  p(v-if="description" class="mt-4") {{ t(description) }}
  ul(v-if="stack" class="flex flex-wrap font-medium text-sm justify-center my-4")
    li(class="project__stack-item" :key="uniqid()" v-for="item in stack") {{ item }}

  a(v-if="sourceCode" aria-label="source-code" class="link link--icon ml-1 text-xl p-0" :href="sourceCode")
    i-mdi-github
  a(v-if="livePreview" aria-label="live-preview" class="link link--icon ml-1 text-xl p-0" :href="livePreview")
    i-mdi-launch
</template>

<style>
.project__stack-item {
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--clr-fg-alt);
}

.animate {
  animation-duration: 0.75s;
  animation-delay: 0.5s;
  animation-name: animate-fade;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
  animation-fill-mode: backwards;
}

/* Glow In */
.animate.glow {
  animation-name: animate-glow;
  animation-timing-function: ease;
}

@keyframes animate-glow {
  0% {
    opacity: 0;
    filter: brightness(3) saturate(3);
    transform: scale(0.8, 0.8);
  }
  100% {
    opacity: 1;
    filter: brightness(1) saturate(1);
    transform: scale(1, 1);
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  .animate { animation: none !important; }
}
</style>
