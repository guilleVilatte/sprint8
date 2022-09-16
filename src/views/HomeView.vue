<template>
  <div class="home d-flex flex-column justify-content-start align-items-center">
    <router-link class="caja row mt-sm-4 d-lg-flex rounded-2" to="/starships" style="text-decoration:none;">
      <h4 class=" col-12 col-lg-6">STAR WARS: STARSHIPS</h4>
      <img class="nave col-12 col-lg-6 img-fluid" src="../../public/img/5.jpg">
    </router-link>
    <router-link class="caja row mt-4 d-lg-flex rounded-2" to="/actors" style="text-decoration:none;">
      <h4 class="col-12 col-lg-6">STAR WARS: ACTORS</h4>
      <img class="nave col-12 col-lg-6 img-fluid" src="../../public/img/which-obi-wan-kenobi-are-you_tall-mobile_12bd18ff.jpeg">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  margin: 0;
  width: 100%;
}

.caja {
  background: rgb(39, 39, 39);
  border-radius: 8px;
  overflow: hidden;
  width: 70%;
}

.nave {
  height: 300px;
  width: 50%;
  padding: 0;
  border-left: 3px solid rgb(231, 231, 42);
}

h4 {
  color: gray;
  padding: 15px;
  width: 50%;
}

h4:hover {
  color: rgb(231, 231, 42);
}
@media only screen and (max-width: 1300px){
  .caja {
  width: 60%;
}
}
@media only screen and (max-width: 995px) {
  .nave {
    width: 100%;
    height: 250px;
    border-top: 3px solid rgb(231, 231, 42);
    border-left: none;
  }
  h4 {
  width: 100%;
}
}

</style>