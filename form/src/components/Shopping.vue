<template>
  <div class="p-field">
    <label for="street-input">street</label>
    <InputText id="street-input" type="text" 
    :value="street" @input="changeStreet" />
  </div>
  <div class="p-field">
    <label for="state-input">state</label>
    <InputText id="state-input" type="text" 
    :value="state" @input="changeState" />
    
  </div>
    <div class="p-field">
    <label for="zip-input">zip</label>
    <InputText id="zip-input" type="number" 
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
   zip:String,
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