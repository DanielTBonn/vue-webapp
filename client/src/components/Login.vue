<script setup>
import { ref } from 'vue';

const string = ref('Login to Vue')

</script>

<template>
    <div>
        <p>{{ string }}</p>
    </div>
</template>