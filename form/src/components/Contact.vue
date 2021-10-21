<template>
  <div class="p-field">
    <label for="name-input">Name</label>
    <InputText id="name-input" type="text" 
    :value="name" @input="changeName" />
   
  </div>
 {{ name }}

  <div class="p-field">
    <label for="email-input">Email</label>
    <InputText id="email-input" type="email" 
    :value="email" @input="changeEmail" />
    
  </div>
   {{ email }}
    <div class="p-field">
    <label for="phone-input">Phone</label>
    <InputText id="phone-input" type="number" 
    :value="phone" @input="changePhone" />
  </div>
 {{ phone }}

</template>

<script>
import InputText from 'primevue/inputtext';

export default {
 components: {
   InputText,
 },
 props: {
   name:String,
   email:String,
   phone:Number,
 },
//  emits: [
//    'update:name',
//    'update:email',
//    'update:phone',
//  ],
 methods: {
   changeName(e) {
   this.$emit('update:name', e.target.value)
   },
    changeEmail(e) {
 this.$emit('update:email', e.target.value)
  },
    changePhone(e) {
 this.$emit('update:phone', e.target.value)
  },
 }
}
</script>
