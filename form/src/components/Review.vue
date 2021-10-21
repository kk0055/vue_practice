<template>
  <div class="home">
 <h3>Contact info</h3>
 {{ contactInfo.name }}   
 {{ contactInfo.email }}   
 {{ contactInfo.phone }}   
 <h3>Shipping info</h3>
  {{ shippingInfo.street }}   
  {{ shippingInfo.state }}   
  {{ shippingInfo.zip }}   
  </div>
</template>

<script>

export default {
props: {
  contactInfo:Object,
  shippingInfo:Object,
}
}
</script>