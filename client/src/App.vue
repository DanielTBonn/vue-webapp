<script setup>

import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TheCounter from './components/TheCounter.vue'
import TestAsync from './components/TestAsync.vue'
import 'vue-router'

</script>


<template>

        <div class="routing">
          <p>Hello Router</p>
          <router-link to="/home">Home Page</router-link>
          <router-link to="/login">Login Screen</router-link>
        </div>
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
