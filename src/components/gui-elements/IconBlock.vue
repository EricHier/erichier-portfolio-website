<template>
  <div class="w-full text-center text-red-400">
    <div class="mouseover-focus hover:scale-105">
      <font-awesome :icon="icon" size="3x"/>
      <div class="text-black mt-4 mx-4 md:mx-6 lg:mx-0 xl:mx-12">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["icon"]
}
</script>