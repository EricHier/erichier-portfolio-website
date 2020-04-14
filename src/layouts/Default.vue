<template>
  <div class="layout">
    <slot/>
  </div>
</template>
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
