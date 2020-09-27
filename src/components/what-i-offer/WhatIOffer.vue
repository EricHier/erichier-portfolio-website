<template>
  <section class="bg-white w-full">
    <div class="container mx-auto">
      <h2 class="heading p-8 mb-8">Was ich anbiete</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">

        <IconBlock v-for="(offer, id) in offers" :icon="offer.icon" class="mb-12" data-aos="fade-up" :data-aos-delay="id*100">{{offer.text}}</IconBlock>

      </div>

      <div class="text-lg text-center md:pt-8 pb-12 px-12">

        Bei Interesse oder Fragen kontaktieren Sie mich bitte unter
        <a class="inline-block w-fit font-bold text-red-400 hover:underlined" href="mailto:develop.erichier@gmail.com">developer.erichier@gmail.com</a>.

      </div>

    </div>
  </section>
</template>
<script>
import IconBlock from "../gui-elements/IconBlock";
export default {
  components: {IconBlock},
  data() {
    return {
      offers: [
        {icon: ['fab', 'vuejs'], text: "Frontend Entwicklung mit Frameworks wie Vue oder TailwindCSS und allem was dazugehört. "},
        {icon: ['fab', 'node-js'], text: "Backend Entwicklung unter Node.js mit (GraphQL) APIs, Datenbanken und Frameworks aller Art. "},
        {icon: ['fab', 'wordpress-simple'], text: "Wordpress Seiten in einem Gesamtpaket mit Design und technischer Betreuung zum Beispiel für den Einzelhandel. "},
        {icon: ['fas', 'file-code'], text: "Entwicklung (z.B. auf Android und mit Python) und Projektmanagement in allen Bereichen"}
      ]
    }
  }
}
</script>