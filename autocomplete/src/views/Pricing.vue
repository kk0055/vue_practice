<template>
  <div class="flex justify-center">
    <div class="w-1/2 bg-blue-800 rounded-lg shadow px-6 py-12 flex flex-col items-center">
     <div class="bg-gray-200 rounded-full">
       <button @click="currentFrequency = 'monthly'" 
       class="rounded-full font-bold px-6 py-1 focus:outline-none " 
       :class="currentFrequency == 'monthly' ? 'bg-blue-600 text-white' : '' "
       >Monthly</button>
       <button  @click="currentFrequency ='yearly'" 
       class="rounded-full font-bold px-6 py-1 focus:outline-none "
       :class="currentFrequency == 'yearly' ? 'bg-blue-600 text-white' : '' "
        >Yearly</button>
   </div>
   <div class="pt-8 flex w-full">
     <div v-for="plan in plans" :key="plan.index" class="text-white w-1/2">
       <h1 >Starter</h1>
       <ul>
         <li>Benefit1</li>
         <li>Benefit1</li>
         <li>Benefit1</li>
         <li>Benefit1</li>
       </ul>
       <div class="flex justify-center pt-8">
       <div class="text-4xl font-bold">${{plan.pricing[currentFrequency].price}}</div>
       <div class="pl-1 pt-2">{{plan.pricing[currentFrequency].label}}</div>
       </div>
     </div>

  
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
   return {
     currentFrequency: 'monthly',

     plans: [
       {
          pricing: {
            monthly: {price: 99, label: '/mo'},
            yearly: {price: 499, label: '/yr'},
          }
       },
        {
          pricing: {
            monthly: {price: 59, label: '/mo'},
            yearly: {price: 899, label: '/yr'},
          }
       },
     ]
   }
  }
}
</script>