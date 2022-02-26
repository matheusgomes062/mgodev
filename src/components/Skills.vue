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
      h3(class="w-full text-center mb-3") {{t('using_or_used_before')}}
      li(v-for="skill in skills")
        div(class="m-2 btn btn--plain flex flex-row items-center rounded-md section__skill" v-if="!skill.learning && skill.wantsToLearn === undefined")
          p(class="mr-3") {{ skill.name }}
          Icon(:icon="skill.icon" height="24")
      h3(class="w-full text-center mt-10 mb-3") {{ t('learning_right_now') }}
      li(v-for="skill in skills")
        div(class="m-2 btn btn--plain flex flex-row items-center rounded-md section__skill" v-if="skill.learning")
          p(class="mr-3") {{ skill.name }}
          Icon(:icon="skill.icon" height="24")
      h3(class="w-full text-center mt-10 mb-3") {{ t('wants_to_learn') }}
      li(v-for="skill in skills")
        div(class="m-2 btn btn--plain flex flex-row items-center rounded-md section__skill" v-if="skill.wantsToLearn")
          p(class="mr-3") {{ skill.name }}
          Icon(:icon="skill.icon" height="24")
</template>

<style scoped lang="scss">

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

.skills-section__container {
  background-color: var(--clr-bg-alt);
  border-radius: 1em;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.38);

  li {
    transform-style: preserve-3d;
    background: none;

    &:hover:before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 95%;
      height: 90%;
      border-radius: 1em;
      filter: blur(10px);
      background-image: linear-gradient( var(--rotate) , #5ddcff, #3c67e3 43%, #4e00c2);
      top: 1%;
      left: 3%;
      opacity: 0.5;
      animation: spin 2.5s linear infinite;
    }
  }
}

.section__skill {
  background-color: var(--clr-bg);
}

.learning {
  background-color: var(--clr-bg-alt);
  transition: none !important;
  transform: none !important;
}
</style>
