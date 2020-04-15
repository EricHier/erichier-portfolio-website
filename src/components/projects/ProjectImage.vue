<template>
    <div class="mx-auto shadow md:shadow-xl rounded">
        <g-image v-bind:src="imgUrl" width="600" class="shadow-2xl rounded"/>
    </div>
</template>
<script>
    export default {
        props: ["project"],
        computed: {
            imgUrl() {
                return require('!!assets-loader?width=600!~/assets/img/' + this.project.node.img)
            }
        }
    }
</script>