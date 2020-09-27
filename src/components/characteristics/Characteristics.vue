<template>
  <div>

    <!-- Desktop -->
    <div class="hidden md:grid grid-cols-2 gap-6 m-8 mx-auto w-full md:w-fit">
      <CharacteristicsCard v-for="(card, id) in cards" :key="card.title" :title="card.title" :answer="card.answer" :id="id" class="smx-auto"/>

      <div class="w-48 h-48 m-6 flex justify-center items-center text-lg text-center select-none" data-aos="fade-up" :data-aos-delay="cards.length * 200">
        Du möchtest mich kennenlernen? Schreib mir!
      </div>
    </div>

    <!-- Mobile -->
    <div class="md:hidden w-full p-4">
      <div class="flex justify-content items-center h-24 mb-6 rounded text-xl text-center shadow-cube mouseover-focus hover:scale-105" v-for="card in cards" :key="card.title">
        <div class="w-1/2 bg-gray-800 h-full flex justify-center items-center rounded-l">
          {{card.title}}
        </div>
        <div class="w-1/2 bg-red-400 h-full flex justify-center items-center rounded-r">
          {{card.answer}}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import dayjs from "dayjs";
import CharacteristicsCard from "./CharacteristicsCard"

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