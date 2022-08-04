<template>
  <div class="container">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default{
  components: { Header, Footer }
}
</script>

<style scoped>
.container {
  color: gray;
  background-image: url('../public/img/HD-wallpaper-stars-night-sky-amoled-black-dark-minimal-night-night-sky-sky-star-stars-steamroom.jpg');
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  font-family: general;
}

@font-face {
  font-family: títulos;
  src: url("../public/Kanit/Kanit-Light.ttf") format('truetype');
}

@font-face {
  font-family: general;
  src: url("../public/Kanit/Kanit-Light.ttf") format('truetype');
}
</style>
