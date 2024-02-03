<script>
import { ref } from 'vue'
 
export default {
    async setup() {
        const msg = ref("Hello Test")
        
        return { 
            msg
        }
    }
}

</script>

<template>

    <div class="routing">
        <p>Hello Router</p>
        <router-link to="/home">Home Page</router-link>
        <router-link to="/login">Login Screen</router-link>
    </div>
    
    <router-view></router-view>

</template>