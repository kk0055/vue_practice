<template>
  <div class="mt-6">
 <input type="text" :placeholder="template" 
 class="w-56 text-2xl bg-gray-300 p-3 rounded-lg focus:outline-none" v-model="number">
  </div>
</template>

<script>
export default {
  props: [
      'template'
  ],
 data: function() {
   return {
     number:''
     }
   },

   watch: {
     number() {
     this.number = this.number.replace(/[^0-9]/g, '')
     .replace(/^(\d{3})(\d{4})(\d{4})/g, '($1) $2-$3');
   }
 }
}
</script>