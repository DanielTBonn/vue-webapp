<script setup>
import { nextTick, ref, onMounted } from 'vue';

import { fetchNews } from '../utils/fetchNews.js'


const newsList = ref(['hi'])
onMounted(async () => {
  console.log('mounted!')
  newsList.value = await fetchNews();
  
  console.log("news in vue", newsList.value)
})


</script>

<template>

        <div>
            <p>Home</p>
        </div>
        <!-- <div> News: {{ news }}</div> -->
        <ul>
            <li v-for="news in newsList">
                <h1> <a :href="news.url" target="_blank">{{ news.title }}</a> <span> published at: {{ news.publishedAt }}</span> </h1>
                
                <h2>{{ news.author }} </h2>
                <h3>{{ news.description }}</h3>
                
            </li>
        </ul>

</template>