<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TheCounter from './components/TheCounter.vue'
import TestAsync from './components/TestAsync.vue'
import 'vue-router'
import { fetchNews } from './utils/fetchNews.js'

import { API_KEY } from '../apikey'

// export default {
//   data() {
//     return {
//       news: []
//     }
//   },
//   mounted() {
//     fetchNews()
//       .then(data => this.news = data)
//       .catch(err => console.log(err.message));
//   }
// }

// console.log(news);

const news = ref(['hi'])




onMounted(async () => {
  console.log('mounted!')
  news.value = await fetchNews();
  
  console.log("news in vue", news)
})


</script>


<template>
  <!-- <Suspense> -->
<!-- 
    <TestAsync />
    <div>
      Hello world
    </div> -->
      <!-- <template #default> -->
        <div class="routing">
          <p>Hello Router</p>
          <router-link to="/home">Home Page</router-link>
          <router-link to="/login">Login Screen</router-link>
        </div>
        <router-view></router-view>

        <div>{{ news }}</div>
      <!-- </template> -->


      <!-- <template #fallback> -->
        <!-- Loading... -->
      <!-- </template>  -->
    
  <!-- </Suspense> -->
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
