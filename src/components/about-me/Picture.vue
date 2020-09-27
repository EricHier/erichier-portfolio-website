<template>
  <div class="mx-auto rounded" data-aos="fade-right">
    <g-image :src="imgUrl" width="740" class="shadow-cube rounded mouseover-focus hover:scale-110" alt="Bild von Eric" draggable="false"/>
  </div>
</template>
<script>
export default {
  computed: {
    imgUrl() {
      return require('!!assets-loader?width=740!~/assets/img/eric.jpg')
    }
  }
}
</script>