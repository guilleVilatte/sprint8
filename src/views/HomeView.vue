<template>
  <div class="home d-flex flex-column justify-content-start align-items-center">
    <router-link class="caja mt-sm-4 d-md-flex rounded-2" to="/starships" style="text-decoration:none;">
      <h4>STAR WARS: STARSHIPS</h4>
      <img class="nave img-fluid" src="../../public/img/5.jpg" alt="">
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
  height: 80vh;
  width:100%;
}
.caja{
  background: rgb(39, 39, 39);
  border-radius: 8px;
  overflow: hidden;
}
.nave{
  height: 30vh;
  width: 30vw;
  border-left: 3px solid rgb(231, 231, 42);
}
h4{
  color: gray;
  margin: 20px;
  margin-right: 10vw;
}
h4:hover{
  color: rgb(231, 231, 42);
}

@media only screen and (max-width: 770px) {
  .home{
  margin: 0;
  height: 100vh;
  width:100%;
}
  .nave{
    height: 40vh;
    width: 100vw;
    border-top: 3px solid rgb(231, 231, 42);
    border-left: none;
  }
}
</style>