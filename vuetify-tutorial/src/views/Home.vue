<template>
  <div>
    <Header></Header>
    <PopularProducts></PopularProducts>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "../components/Home/Header";
import PopularProducts from "../components/Home/PopularProducts";
import Footer from "../components/Home/Footer";

export default {
  name: "Home",
  components: {
    Header,
    PopularProducts,
    Footer,
  },
};
</script>
