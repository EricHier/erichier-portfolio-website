<template>
  <div class="w-48 md:w-56 h-48 md:h-56 z-20 text-center md:p-4" @mouseover="active = true" @mouseleave="active = false" @click="active = true" >

    <div data-aos="fade-up" :data-aos-duration="(id + 1) * 200">
      <div class="cube " :class="{'show-front' : !active, 'show-bottom': active}" >
        <div class="cube__face cube__face--front cube__face__active">{{title}}</div>
        <div class="cube__face cube__face--back"></div>
        <div class="cube__face cube__face--right"></div>
        <div class="cube__face cube__face--left "></div>
        <div class="cube__face cube__face--top"></div>
        <div class="cube__face cube__face--bottom cube__face__active">{{answer}}</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ["title", "answer", "id"],
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.cube {
  @apply w-48 h-48 relative;
  transform-style: preserve-3d;
  transform: translateZ(-64rem);
  transition: transform .5s;
}

.cube.show-front  { transform: translateZ(6rem) rotateY(   0deg); }
.cube.show-right  { transform: translateZ(6rem) rotateY( -90deg); }
.cube.show-back   { transform: translateZ(6rem) rotateY(-180deg); }
.cube.show-left   { transform: translateZ(6rem) rotateY(  90deg); }
.cube.show-top    { transform: translateZ(6rem) rotateX( -90deg); }
.cube.show-bottom { transform: translateZ(6rem) rotateX(  90deg); }

.cube__face {
  @apply absolute w-48 h-48 shadow-cube flex justify-center items-center text-xl tracking-wider text-white p-2;

}

.cube__face--bottom   { @apply bg-red-500; }
.cube__face--front { @apply bg-gray-800; }

.cube__face--front  { transform: rotateY(  0deg) translateZ(6rem); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(6rem); }
.cube__face--back   { transform: rotateY(180deg) translateZ(6rem); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(6rem); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(6rem); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(6rem); }
</style>