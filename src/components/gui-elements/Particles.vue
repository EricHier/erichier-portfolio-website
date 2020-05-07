<template>
    <div class="w-full h-full absolute top-0 left-0 z-0"
         id="particles-js"/>
</template>
<script>
    import {particleConfig} from "~/data/particlejs-config";

    export default {
        async mounted() {
            require('../../../node_modules/particles.js/particles');
            this.initParticlesJS()
        },
        methods: {
            initParticlesJS() {
                particlesJS('particles-js', particleConfig);
            }
        }
    }
</script>
