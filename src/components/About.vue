<script setup lang="ts">
import { computed, ref } from 'vue'
import { about } from '~/portfolio'
const { t } = useI18n()

const { name, role, description, resume, social } = about

let width: number
let height: number
let mouseX: number
let mouseY: number
let mouseLeaveDelay: NodeJS.Timeout

const card = ref()

onMounted(() => {
  width = card.value.offsetWidth
  height = card.value.offsetHeight
})

const mousePX = computed(() => {
  return mouseX / width
})

const mousePY = computed(() => {
  return mouseY / height
})

const cardStyle = computed(() => {
  const rX = mousePX.value * 30
  const rY = mousePY.value * -30
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
  }
})

const cardBgTransform = computed(() => {
  const tX = mousePX.value * -40
  const tY = mousePY.value * -40
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  }
})

const dataImage = 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${dataImage})`,
  }
})

const handleMouseMove = (e: any) => {
  mouseX = e.pageX - card.value.offsetLeft - width / 2
  mouseY = e.pageY - card.value.offsetTop - height / 2
}

const handleMouseEnter = () => {
  console.log('teste')
  clearTimeout(mouseLeaveDelay)
}

const handleMouseLeave = () => {
  mouseLeaveDelay = setTimeout(() => {
    mouseX = 0
    mouseY = 0
  }, 1000)
}
</script>

<template lang="pug">
section(class="card-wrap" aria-labelledby="about-title" role="region" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" ref="card")
  div(class="card" :style="cardStyle")
    div(class="card-bg" :style="[cardBgTransform, cardBgImage]")
    div(class="card-info")
      h1(v-if="name" class="font-bold" id="about-title") {{ t('about.hi_i_am') }} <br/> {{ name }}

      h2(v-if="role" class="mt-6") {{ t('about.i_am') }} {{ t(role) }}

      p(v-if="description" class="mt-10 text-left flex max-w-660px") {{ t(description) }}

      div(class="mt-6 text-center flex flex-row items-end justify-start")
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
</template>

<style scoped lang="scss">
@import './styles/card-parallax.scss'
</style>
