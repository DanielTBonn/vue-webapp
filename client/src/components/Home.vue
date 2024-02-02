<script setup>
import { ref } from 'vue';

const string = ref('Home View')

</script>

<template>
    <div>
        <p>{{ string }}</p>
    </div>
</template>