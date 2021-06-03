<template>
  <div id="app">
  <div :class="classObject">{{ value }}</div>
  <div :style="{ fontSize: (value *10) + 'px' } ">{{ value }}</div>

 <button type="button" @click="value++">+</button>
 <button type="button" @click="value--">-</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function() {
    return{
       value:1
    }
  },
   
   computed: {
     classObject: function () {
       return {

       }
     }
   }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
