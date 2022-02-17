<script setup lang="ts">
</script>

<template lang="pug">
div(class="p-8 mx-auto text-center shadow-lg transition-transform ease-in cursor-pointer transform transition-transform duration-150 ease-linear hover:scale-102" style="box-shadow: var(--shadow)")
  h3 PARA Resiliência
  p(class="mt-4") Site destinado a pesquisa universitária sobre o bom funcionamento de restaurantes. Criamos um formulário com questões advindas do banco, estilo Google Forms.
  ul(class="flex flex-wrap font-medium text-sm justify-center my-4")
    li(class="project__stack-item") item
    li(class="project__stack-item") item
    li(class="project__stack-item") item

  a(class="link link--icon ml-1 text-xl p-0")
    i-mdi-github
  a(class="link link--icon ml-1 text-xl p-0")
    i-mdi-launch
</template>

<style>
.project__stack-item {
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--clr-fg-alt);
}
</style>
