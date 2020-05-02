<template>
  <div class="layout">
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
