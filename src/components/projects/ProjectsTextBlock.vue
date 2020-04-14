<template>
    <div class="flex flex-col text-center justify-center items-center">
        <h4 class="text-2xl md:text-2xl my-6 font-semibold px-10 pb-3 border-b-2 border-black">{{title}}</h4>
        <h5 class="text md:text-lg mb-6 px-0 md:px-10">
            <slot/>
        </h5>
    </div>
</template>
<script>
    export default {
        props: ["title"]
    }
</script>
