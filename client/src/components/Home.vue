<script setup>
import {ref, onMounted } from 'vue';

import { fetchNews } from '../utils/fetchNews.js'

const newsList = ref(['hi'])
const backupImg = ref('https://miro.medium.com/v2/resize:fit:4800/format:webp/1*KuGlXZjyTw7q38uzY_aZRA.png');

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
        <div v-for="news in newsList">
            <div class="news-item">
                <h1> <a :href="news.url" target="_blank">{{ news.title }}</a> <span> published at: {{ news.publishedAt }}</span> </h1>
                <div>
                    <img width="300" height="200" :src="news.urlToImage || backupImg">
                </div>
                <h2>{{ news.author }} </h2>
                <h3>{{ news.description }}</h3>
            </div>
        </div>            
</template>


<style>

.news-item {
    border-top: 2px solid #fff;
}

/* .news-item:before {
    display: block;
}

.news-item:after {
    display: block;
} */

.news-item:first-of-type:before {
    display: none;
}

.news-item:last-of-type:after {
    display: none;
}
</style>