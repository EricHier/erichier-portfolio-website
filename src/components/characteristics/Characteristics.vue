<template>
  <div>

    <!-- Desktop -->
    <div class="hidden md:grid grid-cols-2 gap-6 m-8 mx-auto w-full md:w-fit">
      <CharacteristicsCard v-for="(card, id) in $t('about-me.cards')" :key="card.title" :title="card.title" :answer="card.answer" :id="id" class="smx-auto"/>

      <div class="w-48 h-48 m-6 flex flex-col justify-center items-center text-lg text-center select-none" data-aos="fade-up" :data-aos-delay="$t('about-me.cards').length * 200" @click="scrollToMail">
        {{ $t("about-me.contact-question")[0] }} <br><button class="italic mt-2 block hover:text-red-400 focus:outline-none">{{ $t("about-me.contact-question")[1] }}</button>
      </div>
    </div>

    <!-- Mobile -->
    <div class="md:hidden w-full p-4">
      <div class="flex justify-content items-center h-24 mb-6 rounded text-xl text-center shadow-cube mouseover-focus hover:scale-105" v-for="card in $t('about-me.cards')" :key="card.title">
        <div class="w-1/2 bg-gray-800 h-full flex p-2 justify-center items-center rounded-l">
          {{card.title}}
        </div>
        <div class="w-1/2 bg-red-400 h-full flex p-2 justify-center items-center rounded-r">
          {{card.answer}}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import CharacteristicsCard from "./CharacteristicsCard"

export default {
  components: {CharacteristicsCard},
  methods: {
    scrollToMail() {
      import("smoothscroll-polyfill").then(smoothscroll => {
        smoothscroll.polyfill();

        document.querySelector("#kontakt").scrollIntoView({
          behavior: 'smooth'
        });

      });
    }
  }
}
</script>