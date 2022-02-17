<script setup lang="ts">
</script>

<template lang="pug">
.flex-column.mt-12
  h1 Olá, me chamo Matheus Gomes

  h2(class="mt-6") Sou Front end developer

  p(class="mt-6 text-center flex") Desenvolvedor full stack especializado em front end com comprovadas habilidades técnicas, organizacionais e de comunicação, trabalhando com Agile e projetando soluções de software. Oferecendo fortes habilidades em Vue e experiência de trabalho com SQL (PostgreSQL), .NET Core, Javascript e muito mais. Recentemente escrevi um livro em Markdown sobre Markwdown!)

  div(class="mt-4 text-center flex flex-row items-center justify-center")
    a(class="cursor-pointer mr-2")
      span(type="button" class="btn btn--outline").
        curriculo
    a(class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-github
    a(class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-linkedin
    a(class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-dev-to
    a(class="link link--icon text-3xl cursor-pointer mr-2 p-0")
      i-mdi-medium
</template>
