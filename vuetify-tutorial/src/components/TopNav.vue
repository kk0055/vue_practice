<template>
  <div>TopNav</div>
</template>
<script>
export default {
  data() {
    return {
      drawer:false,
      items: [
        {title:"Home", link:'/', icon:'home'},
        {title:"Store", link:'/store', icon:'shopping-basket'},
        {title:"Cart", link:'/cart', icon:'shopping-cart'},
      ]
    }
  }
}
</script>