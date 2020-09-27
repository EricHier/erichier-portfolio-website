<template>
  <div>
    <slot/>
    <Footer />
  </div>
</template>
<script>
  import Footer from "~/components/gui-elements/Footer";

  export default {
    components: {Footer}
  }
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss">
  body, html {
    @apply bg-background overflow-x-hidden;
    scroll-behavior: smooth;
  }

  .mouseover-focus {
    @apply transition-all transform ease-in-out duration-200;
  }
</style>