<template>
    <div class="text-secondary">
      <div class="modal-overlay" ></div>
      <div class="row modal two bg-dark" >
        <div @click="close()" class="icon close"></div>
        <div class="my-4 ">
          <img src="../../public/img/disney.png" class="images img-fluid" alt="">
          <img src="../../public/img/logo-StarWars.png" class="images img-fluid" alt="">
        </div>
        <h3 class="text-warning">CREATE YOUR ACCOUNT</h3>
        <input type="text" class="col-10" placeholder="First Name" v-model="firstName">
        <input type="text" class="col-10" placeholder="Last Name" v-model="lastName">
        <input type="email" class="col-10" placeholder="Email Adress" v-model="email">
        <input id="password" type="password" class="col-10" placeholder="Password" v-model="password">
        <div class="d-flex align-items-center ms-4 col-10 mb-3">
          <input type="checkbox" @click="passVisible" id="show" class="check">
          <label for="show" class="ms-4 mb-2"> Show Password</label>
        </div>
        <div class="d-flex align-items-center ms-4 col-10 mb-3">
          <input type="checkbox" id="another" class="check">
          <label for="another" class="ms-3 mb-2">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from <a
              href="https://privacy.thewaltdisneycompany.com/en/definitions/#The-Walt-Disney-Family-of-Companies" target="_blank"
              class="text-warning">The Walt Disney Family of Companies.</a></label>
        </div>
        <button type="btn" class="btn btn-secondary text-white col-10">Create Account</button>
      </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            invalidEmail: false
        };
    },
    methods: {
        close() {
            this.$store.commit("closeModal");
        }
    },
}
</script>

<style>
/*EL ESTILO ESTÁ MAYORMENTE EN LOGIN PARA NO REPETIR CODIGO*/
.two {
  height: 600px;
  top: 10%;
}
</style>