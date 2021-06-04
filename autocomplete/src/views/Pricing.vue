<template>
  <div class="flex justify-center">
    <div class="w-1/2 bg-blue-800 rounded-lg shadow px-6 py-12 flex flex-col items-center">
     <div class="bg-gray-200 rounded-full">
       <button @click="currentFrequency = frequency" 
       v-for="(price, frequency) in plans[0].pricing"
       class="rounded-full font-bold px-6 py-1 focus:outline-none my-1" 
       :class="currentFrequency == frequency ? 'bg-blue-600 text-white' : '' "
       >{{ frequency }}</button>
      
   </div>
   <div class="pt-8 flex w-full">
     <div v-for="plan in plans" :key="plan.index" class="text-white w-1/2">
       <h1 >{{plan.name}}</h1>
       <ul>
         <li v-for="benefit in plan.benefits[currentFrequency]">{{benefit}}</li>
        
       </ul>
       <div class="flex justify-center pt-8">
       <div class="text-4xl font-bold">{{ getPrice(plan.pricing[currentFrequency].price )}}</div>
       <div class="pl-1 pt-2">{{plan.pricing[currentFrequency].label}}</div>
       </div>
     </div>

  
     </div>
     <div class="pt-4 text-center text-gray-400 text-sm font-bold">
     <a href="#" @click.prevent="currency = 'usd'" >USD</a> |
     <a href="#" @click.prevent="currency = 'jpy'" >JPY</a>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getPrice(price) {
       return this ['currency' + this.currency.toUpperCase()](price);
    },

    currencyUSD(price) {
      return '$' + price;
    },
    currencyJPY (price) {
      return  Math.ceil((price * 1.10)) + 'JPY';
    }

  },
  data: function() {
   return {
     currentFrequency: 'monthly',
     currency: 'usd',
     plans: [
       {
          name: "Starter",
          benefits: {
            monthly: ['Benefit1','Benefit2','Benefit3'],
            yearly: ['Benefit1','Benefit1','Benefit1','Benefit4'],
            lifetime: ['Benefit1','Benefit1','Benefit1','Benefit4','Benefit4'],
          },
          pricing: {
            monthly: {price: 99, label: '/mo'},
            yearly: {price: 499, label: '/yr'},
            lifetime: {price: 1000, label: ''},
          }
       },
        {
            name: "Pro",
            benefits: {
            monthly: ['Benefit1','Benefit1','Benefit1'],
            yearly: ['Benefit1','Benefit1','Benefit1','Benefit4'],
            lifetime: ['Benefit1','Benefit1','Benefit1','Benefit4','Benefit4'],
          },
          pricing: {
            monthly: {price: 299, label: '/mo'},
            yearly: {price: 999, label: '/yr'},
            lifetime: {price: 1300, label: ''},
            
          }
       },
     ]
   }
  }
}
</script>