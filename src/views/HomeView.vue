<template>
  <div class="home" s>
    <h1 class="d-flex justify-content-center mt-5">
      Bienvenidos a la página de Naves de Star Wars
    </h1>
    <router-link class="d-flex justify-content-center mt-5" to="/starships" style="text-decoration:none;">
      <button class="btn" >Ir a lista de Naves</button>
    </router-link>
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  
}
</script>

<style scoped>
.home{
  margin: 0;
  height: 100vh;
  width:100%;
  background-image: url('../../public/img/29.jpg');
  background-repeat: no-repeat;
  background-attachment: cover;
  background-position-x: center;
  background-position-y: center;
}
.btn{
  text-decoration: none;
  color: gray;
  font-weight: bold;
  background: rgb(231, 231, 42);
}
.btn:hover{
  color: rgb(231, 231, 42);
  background: black;
}
</style>