<template>
    <div>
        <h1>This is auto increment</h1>
     <p>Population of Earth is : </p><h2><countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo></h2>
    </div>
</template>

<script>
import countTo from 'vue-count-to';

    export default {
        data() {
             return {
                 startVal: 0,
                endVal: Math.random() * 200000000000000000000000,
                duration:Math.floor(Math.random() * 500000000)
             }
         },
         components: {
             countTo,
         }
    }
</script>

<style scoped>
h2 {
    color: #1e3799;
    
    }
     
</style>