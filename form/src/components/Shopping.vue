<template>
  <div class="p-field">
    <label for="name-input">street</label>
    <InputText id="name-input" type="text" 
    :value="street" @input="changeStreet" />
  </div>
  <div class="p-field">
    <label for="email-input">state</label>
    <InputText id="email-input" type="text" 
    :value="state" @input="changeState" />
    
  </div>
    <div class="p-field">
    <label for="phone-input">zip</label>
    <InputText id="phone-input" type="number" 
    :value="zip"  @input="changeZip" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
export default {
 components: {
   InputText,
 },
 props: {
   street:String,
   state:String,
   zip:Number,
 },
 emits: [
   'update:street',
   'update:state',
   'update:zip',
 ],
 methods: {
   changeStreet(e) {
   this.$emit('update:street', e.target.value)
   },
    changeState(e) {
 this.$emit('update:state', e.target.value)
  },
    changeZip(e) {
 this.$emit('update:zip', e.target.value)
  },
 }
}
</script>