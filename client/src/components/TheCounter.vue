<script setup>
    import { nextTick, ref } from 'vue';

    const count = ref(0);

    async function increment() {
        count.value++
        await nextTick()
    }

</script>

<template>
    <button @click="increment">{{ count }}</button>
</template>