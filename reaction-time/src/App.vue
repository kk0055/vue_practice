<template>
  <div >
  <h1>Reaction Timer</h1>
  <button @click="start">Play</button>
  </div>
</template>

<script>

export default {
  name:'App',
  components:{},
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