<template>
  <div class="p-field">
    <label for="name-input">Name</label>
    <InputText id="name-input" type="text" v-model="value" />
  </div>
  <div class="p-field">
    <label for="email-input">Email</label>
    <InputText id="email-input" type="email" v-model="value" />
  </div>
    <div class="p-field">
    <label for="phone-input">Phone</label>
    <InputText id="phone-input" type="number" v-model="value" />
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
