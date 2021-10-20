<template>
  <div class="home">
  <p>Contact</p>
  <div>
    <InputText type="text" v-model="value" />
    <InputText type="text" v-model="value" />
    <InputText type="text" v-model="value" />

   
  </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
 components: {
   InputText,
 
 }
}
</script>
