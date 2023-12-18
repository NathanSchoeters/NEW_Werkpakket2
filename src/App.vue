<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
<html lang="nl">

<body id="top">
  <Header/>
  <router-view></router-view> 
  <Footer/>
    
</body>
</html>
</template>

<style scoped>

</style>
