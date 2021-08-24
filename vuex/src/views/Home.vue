<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<Counter/>
 <div class="counter-square">
   {{ $store.state.counter }}
   <sup>2</sup>=
   {{ $store.getters.counterSquared }}
 </div>
 <div class="buttons">
   <button  @click="$store.commit('decreaseCounter')">-</button>
   <button @click="$store.dispatch('increaseCounter')">+</button>
 </div>
 <div>
   <input 
   v-model='colorCode'
   placeholder="Please enter color code" type="text">
 </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '../components/Counter';
export default {
  name: 'Home',
  components: {
    Counter
  },
computed: {
  colorCode: {
    get(){
     return this.$store.state.colorCode
    },
    set(colorValue){
   this.$store.dispatch('setColorCode',colorValue)
    }
  }
}
}
</script>
<style >
  div {
    margin-bottom: 80px;
  }
  .counter {
    font-size: 80px;
  }
  .buttons button{
   font-size: 40px;
   width:100px;
   margin:0 10 px
  }
</style>