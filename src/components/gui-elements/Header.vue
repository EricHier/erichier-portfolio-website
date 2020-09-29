<template>
  <section class="h-screen flex flex-col justify-between font-heading text-white">
    <div class="container mx-auto p-10"/>

    <div class="container mx-auto p-10 flex flex-col md:flex-row justify-between">
      <div>
        <h2 class="text-2xl md:text-4xl mb-4" data-aos="fade">
          Zu jeder Problemstellung bedarf es einer L&ouml;sung.
        </h2>
        <h2 class="text-2xl md:text-4xl" data-aos="fade" data-aos-delay="1500">
          Und diese zu entwickeln ist meine Passion.
        </h2>
        <div class="w-32 h-2 border-b-8 border-dotted border-red-500 mt-2" data-aos="flip-up" data-aos-delay="1700"/>
      </div>
      <h1 class="text-3xl md:text-5xl text-right" data-aos="fade" data-aos-delay="2800">
        Hi!<br>
        EricHier
      </h1>
    </div>

    <div
        class="w-full relative mx-auto text-center flex justify-center items-center heading md:text-3xl text-black z-10 text-white has-caro-background">
      <h2>Meine Projekte</h2>
      <button class="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white text-black focus:outline-none"
         data-aos="fade" data-aos-anchor="#projects" id="projects-title" @click="scroll">
        Meine Projekte
      </button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    scroll(e) {
      import("smoothscroll-polyfill").then(smoothscroll => {
        smoothscroll.polyfill();

        document.querySelector(`#${e.target.id}`).scrollIntoView({
          behavior: 'smooth'
        });

      });

    }
  }
}
</script>