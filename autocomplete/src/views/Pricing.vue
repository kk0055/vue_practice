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
       <h1 >{{plan.name}}</h1>
       <ul>
         <li v-for="benefit in plan.benefits[currentFrequency]">{{benefit}}</li>
        
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
          name: "Starter",
          benefits: {
            monthly: ['Benefit1','Benefit2','Benefit3'],
            yearly: ['Benefit1','Benefit1','Benefit1','Benefit4']
          },
          pricing: {
            monthly: {price: 99, label: '/mo'},
            yearly: {price: 499, label: '/yr'},
          }
       },
        {
            name: "Pro",
            benefits: {
            monthly: ['Benefit1','Benefit1','Benefit1'],
            yearly: ['Benefit1','Benefit1','Benefit1','Benefit4']
          },
          pricing: {
            monthly: {price: 59, label: '/mo'},
            yearly: {price: 299, label: '/yr'},
          }
       },
     ]
   }
  }
}
</script>