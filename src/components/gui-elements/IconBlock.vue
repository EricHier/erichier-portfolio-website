<template>
  <div class="w-full text-center text-red-400 mouseover-focus hover:scale-105">
    <font-awesome :icon="icon" size="3x"/>
    <div class="text-black mt-4 mx-4 sm:mx-12">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["icon"]
}
</script>