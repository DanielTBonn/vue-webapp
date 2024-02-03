<script setup>
import { nextTick, ref } from 'vue';

// import { fetchNews } from '../utils/fetchNews.js'


// const news = await fetchNews();

// // console.log("news in vue", news)

// const string = ref('Home View')

</script>

<template>
    <Suspense>

        <div>
            <p>Home</p>
        </div>

        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>