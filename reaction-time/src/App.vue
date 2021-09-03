<template>
  <div >
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay"/>
  </div>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name:'App',
  components:{
    Block
  },
 data() {
   return{
     isPlaying:false,
     delay:null
   }
 },
 methods: {
   start() {
     this.delay = 2000 + Math.random()* 5000
     this.isPlaying = true
     console.log(this.delay)
   }
 }
}
</script>

<style >
#app {
  -webkit-font-smoothing:antialiased;
  text-align: center;
  margin-top:60px;
  color: #444;
}
</style>