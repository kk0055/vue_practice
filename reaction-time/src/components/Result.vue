<template>
  <div class="block">
      <p  >Reaction Time: {{score}}</p>
      <p class="rank">{{rank}}</p>
  </div>
</template>

<script>
export default {
  props:[
    'score'
  ],
  data() {
   return {
     rank:null
   }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Super man'
    }else if (this.score < 400){
      this.rank = 'まあまあ'
     }else {
       this.rank = 'Super slow....'
     }
  }
}
</script>

<style >
 .rank{
  font-size: 1.4em;
  color: blue;
  font-weight: bold;
 }
</style>