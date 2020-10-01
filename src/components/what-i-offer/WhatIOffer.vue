<template>
  <section class="bg-white w-full">
    <div class="container mx-auto">
      <h2 class="heading p-8 mb-8">{{ $t("what-i-offer.title") }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">

        <IconBlock v-for="(offer, id) in $t('what-i-offer.offers')" :icon="offer.icon" class="mb-12" data-aos="fade-up" :data-aos-delay="id*100">{{offer.text}}</IconBlock>

      </div>

      <div class="text-lg text-center md:pt-8 pb-12 px-12" id="kontakt">

        {{ $t("what-i-offer.contact-me") }}
        <a class="inline-block w-fit font-bold text-red-400 hover:underlined" href="mailto:develop.erichier@gmail.com" target="_blank">developer.erichier@gmail.com</a>.

      </div>

    </div>
  </section>
</template>
<script>
import IconBlock from "../gui-elements/IconBlock";
export default {
  components: {IconBlock},
}
</script>