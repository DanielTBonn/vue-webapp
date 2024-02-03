<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TheCounter from './components/TheCounter.vue'
import 'vue-router'

import { fetchNews } from './utils/fetchNews.js'


const news = fetchNews();

console.log(news)

const promise = 
news
.then(result => console.log("this be result.data", result.articles))
.then();
console.log('this is the promise', promise)

</script>

<template>
  <div class="routing">
    <p>Hello Router</p>
    <router-link to="/home">Home Page</router-link>
    <router-link to="/login">Login Screen</router-link>

  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />


    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <div>
    <TheCounter />
  </div> -->

  <router-view></router-view>

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
