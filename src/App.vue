<template>
  <div class="container">
    <div class="img row d-flex justify-content-end">
      <img class="img-fluid col-8" src="../public/img/Star_Wars_Logo.svg.png" alt="">
      <nav class="d-flex justify-content-end align-items-center col-4">
        <a class="logs" @click="viewLog()">LOG IN </a> //
        <a class="logs" @click="viewReg()"> SIGN UP</a>
      </nav>
    </div>
    <div>
      <div class="modal-overlay" v-if="showModalLog === true"></div>
      <div class="row modal bg-dark" v-if="showModalLog === true">
        <img src="../public/img/close-button.png" @click="close()" class="close">
        <div class="my-4 ">
          <img src="../public/img/disney.png" class="img-fluid" alt="">
          <img src="../public/img/logo-StarWars.png" class="img-fluid" alt="">
        </div>
        <h3 class="text-warning">ENTER YOUR EMAIL ADRESS</h3>
        <input type="text" class="col-10" placeholder="Email Adress" v-model="email">
        <button type="btn" class="btn btn-secondary text-white col-10" @click="mostrar()">Continue</button>
      </div>
    </div>
    <div class="text-secondary">
      <div class="modal-overlay" v-if="showModalReg === true"></div>
      <div class="row modal two bg-dark" v-if="showModalReg === true">
        <img src="../public/img/close-button.png" @click="close()" class="close">
        <div class="my-4 ">
          <img src="../public/img/disney.png" class="img-fluid" alt="">
          <img src="../public/img/logo-StarWars.png" class="img-fluid" alt="">
        </div>
        <h3 class="text-warning">CREATE YOUR ACCOUNT</h3>
        <input type="text" class="col-10" placeholder="First Name">
        <input type="text" class="col-10" placeholder="Last Name">
        <input type="text" class="col-10" placeholder="Email Adress">
        <input type="text" class="col-10" placeholder="Password">
        <div class="d-flex align-items-center ms-4 col-10 mb-3">
          <input type="checkbox" id="show" class="check">
          <label for="show" class="ms-3 mb-2"> Show Password</label>
        </div>
        <div class="d-flex align-items-center ms-4 col-10 mb-3">
          <input type="checkbox" id="another" class="check">
          <label for="another" class="ms-3 mb-2"> Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from <a href="https://privacy.thewaltdisneycompany.com/en/definitions/#The-Walt-Disney-Family-of-Companies" class="text-warning">The Walt Disney Family of Companies.</a></label>
        </div>
        <button type="btn" class="btn btn-secondary text-white col-10">Continue</button>
      </div>
    </div>
    <nav class="routes d-flex justify-content-center mb-1">
      <router-link class="route" to="/">HOME</router-link>
      <router-link class="route" to="/starships">STARSHIPS</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      email: ""
    }
  },
  computed: {
    ...mapState(['showModalLog', 'showModalReg'])
  },
  methods: {
    viewLog() {
      this.$store.commit('viewLogin');
    },
    viewReg() {
      this.$store.commit('viewRegister')
    },
    close() {
      this.$store.commit('closeModal')
    },
    mostrar() {
      console.log(this.email)
    }
  }
}
</script>

<style scoped>
.container {
  color: rgb(231, 231, 42);
  background: black;
  font-family: general;
}

.img-fluid {
  width: 26%;
  margin-right: 45px;
}

.img {
  background: #000;
}

.route {
  text-decoration: none;
  color: rgb(231, 231, 42);
  border-left: 1px solid rgba(231, 231, 42, 0.5);
  border-right: 1px solid rgba(231, 231, 42, 0.5);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.routes {
  border-top: 1px solid rgba(231, 231, 42, 0.5);
  border-bottom: 1px solid rgba(231, 231, 42, 0.5);
}

.route:hover {
  color: gray;
}

.route:focus {
  border-bottom: 3px solid red;
}

.logs {
  text-decoration: none;
  color: rgb(231, 231, 42);
  margin: 10px;
  cursor: pointer;
}

.logs:hover {
  color: gray;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  height: 120vh;
}

.modal {
  display: block;
  border-radius: 10px;
  height: 300px;
  width: 40%;
  text-align: center;
  position: fixed;
  top: 30%;
  left: 30%;
}
.two{
  height: 600px;
  top: 10%;
}

input {
  border-radius: 7px;
  height: 40px;
  margin-bottom: 10px;
  background: rgb(194, 192, 192);
  color: rgb(169, 169, 16);
  cursor: text;
}

.close {
  width: 50px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.check{
  height: 12px;
  width: 12px;
  margin-left: 10px;
  line-height: 30px;
}

@media only screen and (max-width: 776px) {
  .logs {
    font-size: 0.8em;
  }

  .img-fluid {
    width: 40%;
    margin-right: 0;
  }

  .modal {
    width: 70%;
    left: 15%;
  }

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
