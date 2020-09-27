<template>
  <section class="w-full container mx-auto text-white pb-4">

    <h2 class="heading p-8">Das bin ich</h2>

    <div class="lg:flex justify-center items-center flex-row">

      <Picture class="w-full lg:w-1/2 p-4" />

      <Characteristics class="w-full lg:w-1/2 mt-4"/>

    </div>

  </section>
</template>
<script>
import Characteristics from "../characteristics/Characteristics";
import Picture from "./Picture";

export default {
  components: {Characteristics, Picture}
}
</script>