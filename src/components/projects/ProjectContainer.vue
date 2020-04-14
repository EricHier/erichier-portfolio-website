<template>
    <a class="block container mx-auto grid md:grid-cols-2 gap-4 mb-20 md:mb-16 " v-bind:href="href" target="_blank" v-bind:title="title">
        <slot/>
    </a>
</template>
<script>
    export default {
        props: ["href", "title"]
    }
</script>

