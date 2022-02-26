<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { skills } from '~/portfolio'
const { t } = useI18n()
</script>

<template lang="pug">
section(class="section skills-section" id="skills" aria-labelledby="skills-title" role="region")
  h2(class="section__title font-bold" id="skills-title") {{ t('intro.skills') }}
  div(class="skills-section__container")
    ul(class="max-w-1100px w-full mx-auto flex flex-wrap justify-center")
      li(class="m-2" v-for="skill in skills")
        div(class="btn btn--plain flex flex-row items-center rounded-md section__skill")
          p(class="mr-3") {{ skill.name }}
          Icon(:icon="skill.icon" height="24")
</template>

<style scoped lang="scss">

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

.skills-section {
}

.skills-section__container {
  background-color: var(--clr-bg-alt);
  border-radius: 1em;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.38);

  li {
    transform-style: preserve-3d;

    &:hover:before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 104%;
      height: 110%;
      border-radius: 9px;
      filter: blur(9px);
      background-image: linear-gradient( var(--rotate) , #5ddcff, #3c67e3 43%, #4e00c2);
      top: -4%;
      left: 0%;
      opacity: 0.5;
      animation: spin 2.5s linear infinite;
    }
  }
}

.section__skill {
  background-color: var(--clr-bg);
}
</style>
