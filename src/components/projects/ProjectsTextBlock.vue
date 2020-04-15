<template>
    <div class="flex flex-col text-center justify-center items-center px-0 md:px-10">
        <h4 class="text-2xl md:text-2xl my-6 mt-10 font-semibold px-10 pb-3 border-b-2 border-black">{{title}}</h4>
        <h5 class="md:text-lg">
            <slot/>
        </h5>
        <p class="mb-6 mt-4 italic">{{role}}</p>
    </div>
</template>
<script>
    export default {
        props: ["title", "role"]
    }
</script>
