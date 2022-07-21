<template>
  <div class="container">
    <div class="img row d-flex justify-content-center">
      <img class="img-fluid col-8" src="../public/img/Star_Wars_Logo.svg.png" alt="">
    </div>
    <nav class="routes d-flex justify-content-center mb-4">
      <router-link class="route" to="/">HOME</router-link> 
      <router-link class="route" to="/starships">STARSHIPS</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container{
  color:rgb(231, 231, 42);
  background: black;
  font-family: general;
}
.img-fluid{
  width: 40%;
}
.img{
  background: #000;
}
.route{
  text-decoration: none;
  color:rgb(231, 231, 42);
  border-left:1px solid rgba(231, 231, 42, 0.5);
  border-right:1px solid rgba(231, 231, 42, 0.5);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.routes{
  border-top: 1px solid rgba(231, 231, 42,0.5);
  border-bottom: 1px solid rgba(231, 231, 42,0.5);
}
.route:focus{
  border-bottom: 3px solid red;
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
