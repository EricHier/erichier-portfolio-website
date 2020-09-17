<template>
  <div class="w-full container mx-auto text-white pb-4">

    <h2 class="w-full text-center text-2xl md:text-3xl font-heading p-8 h-96px">Mein Steckbrief</h2>

    <div class="flex flex-col items-center md:grid grid-cols-3 gap-12 m-8 mx-auto w-full md:w-fit">
      <CharacteristicsCard v-for="(card, id) in cards" :title="card.title" :answer="card.answer" :id="id"/>
    </div>

  </div>
</template>
<script>
import dayjs from "dayjs";
import CharacteristicsCard from "../gui-elements/CharacteristicsCard"

export default {
  components: {CharacteristicsCard},
  data() {
    return {
      cards: [{
        title: "Alter?",
        answer: dayjs().diff('2001-03-19', "y"),
      }, {
        title: "Unversität?",
        answer: "RWTH Aachen"
      }, {
        title: "Studiengang?",
        answer: "Informatik Bachelor"
      }]
    }
  },
}
</script>