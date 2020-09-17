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
<style>
  body, html {
    background-color: #1e1f26;
    scroll-behavior: smooth;
  }
</style>