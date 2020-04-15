<template>
    <a class="block container mx-auto md:grid md:grid-cols-2 gap-4 project-container mb-30" v-bind:href="href" target="_blank" v-bind:title="title">
        <slot/>
    </a>
</template>
<script>
    export default {
        props: ["href", "title", "orientation"]
    }
</script>