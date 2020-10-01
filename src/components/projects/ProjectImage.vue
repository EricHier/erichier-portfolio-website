<template>
    <div class="mx-auto shadow md:shadow-xl rounded">
        <g-image :src="imgUrl" width="630" class="shadow-2xl rounded" :alt="project.title"/>
    </div>
</template>
<script>
    export default {
        props: ["project"],
        computed: {
            imgUrl() {
                return require('!!assets-loader?width=630!~/assets/img/' + this.project.img)
            }
        }
    }
</script>