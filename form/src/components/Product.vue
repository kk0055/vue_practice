<template>
  <div class="p-field">
    <label for="product-input">Product</label>
    <InputText id="product-input" type="text" 
    :value="name" @input="changeName" />
  </div>

  <div class="p-field">
    <label for="description-input">Description</label>
    <InputText id="description-input" type="text" 
    :value="description" @input="changeDescription" />
    
  </div>

</template>

<script>
import InputText from 'primevue/inputtext';

export default {
 components: {
   InputText,
 },
 props: {
   name:String,
   description:String,
 },
 emits: [
   'update:name',
   'update:description',
 ],
 methods: {
   changeName(e) {
   this.$emit('update:name', e.target.value)
   },
    changeDescription(e) {
 this.$emit('update:description', e.target.value)
  },

 }
}
</script>
