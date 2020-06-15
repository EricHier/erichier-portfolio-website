<template>
    <a :href="href" target="_blank" class="block container mx-auto md:grid md:grid-cols-2 gap-4 project-container mb-30" :title="title" draggable="false">
        <slot/>
    </a>
</template>
<script>
    export default {
        props: ["href", "title"]
    }
</script>