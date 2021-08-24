<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
 <div class="counter">

 </div>
 <div class="buttons">
   <button>-</button>
   <button>+</button>
 </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',

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