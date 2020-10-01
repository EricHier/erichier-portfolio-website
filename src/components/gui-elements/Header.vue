<template>
  <section class="h-screen flex flex-col justify-between font-heading text-white">

    <div class="absolute md:fixed top-0 right-0 flex justify-center items-center z-20 p-6 text-red-400" @click="changeLanguage">
      <font-awesome :icon="['fas', 'language']" size="2x" class="block" />
    </div>

    <div class="container mx-auto p-10"/>

    <div class="container mx-auto p-10 flex flex-col md:flex-row justify-between">
      <div>
        <h2 v-for="(message, id) in $t('header.left')" class="text-2xl md:text-4xl mb-4 last:mb-0" data-aos="fade" :data-aos-delay="1500 * id">
          {{message}}
        </h2>
        <div class="w-32 h-2 border-b-8 border-dotted border-red-500 mt-2" data-aos="flip-up" data-aos-delay="1700"/>
      </div>
      <h1 class="text-3xl md:text-5xl text-right whitespace-pre-wrap" data-aos="fade" data-aos-delay="2800">{{$t('header.right')}}</h1>
    </div>

    <div class="w-full relative mx-auto text-center flex justify-center items-center heading md:text-3xl text-black z-10 text-white has-caro-background select-none">
      <h2>{{ $t("projects.title") }}</h2>

      <button class="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white text-black focus:outline-none"
         data-aos="fade" data-aos-anchor="#projects" id="projects-title" @click="scroll">
        {{ $t("projects.title") }}
      </button>
    </div>
  </section>
</template>
<script>
import i18n from "gridsome-plugin-i18n";

export default {
  methods: {
    scroll(e) {
      import("smoothscroll-polyfill").then(smoothscroll => {
        smoothscroll.polyfill();

        document.querySelector(`#${e.target.id}`).scrollIntoView({
          behavior: 'smooth'
        });
      });
    },
    changeLanguage() {
      let locale = this.$i18n.availableLocales.filter(a => a !== this.$i18n.locale.toString())

      this.$router.push({
        path: this.$tp(this.$route.path, locale[0], true)
      });
    }
  }
}
</script>