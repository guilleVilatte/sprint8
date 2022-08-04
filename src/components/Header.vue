<template>
  <div>
    <div class="img row d-flex justify-content-center">
      <BurgerModal v-if="showBurgerModal"></BurgerModal>
      <div class="icon burger d-sm-none mt-4" @click="viewBurgerModal"></div>
      <div class="col-4 d-none d-sm-flex mt-5">
        <a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699" target="_blank">
          <div class="icon head face"></div>
        </a>
        <a href="https://www.instagram.com/starwars/" target="_blank">
          <div class="icon head ig"></div>
        </a>
        <a href="https://twitter.com/starwars" target="_blank">
          <div class="icon head tw"></div>
        </a>
        <a href="https://www.youtube.com/user/starwars" target="_blank">
          <div class="icon head you"></div>
        </a>
      </div>
      <img class="star img-fluid col-12 col-sm-4 m-auto" src="../../public/img/unnamed.jpg" alt="">
      <nav class="d-none d-sm-flex justify-content-end align-items-center col-sm-4">
        <a class="logs" @click="viewLog()">LOG IN </a> //
        <a class="logs" @click="viewReg()"> SIGN UP</a>
      </nav>
    </div>
    <LogIn v-if="showModalLog === true"></LogIn>
    <Register v-if="showModalReg === true"></Register>
    <nav class="routes d-none d-sm-flex justify-content-center mb-1">
      <router-link class="route uno" to="/">HOME</router-link>
      <router-link class="route dos" to="/starships">STARSHIPS</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LogIn from './LogIn.vue';
import Register from './Register.vue';
import BurgerModal from './BurgerModal.vue';

export default {
  computed: {
    ...mapState(["showModalLog", "showModalReg", "showBurgerModal"])
  },
  methods: {
    viewLog() {
      this.$store.commit("viewLogin");
    },
    viewReg() {
      this.$store.commit("viewRegister");
    },
    viewBurgerModal() {
      this.$store.commit("mostrarBurgerModal");
    },
  },
  components: { LogIn, Register, BurgerModal }
}
</script>

<style>
.star {
  width: 20%;
}

.route {
  text-decoration: none;
  color: gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 1px;
  position: relative;
}

.routes {
  border-top: 1px solid gray;

}

.route:hover {
  color: white;
}

.uno:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 38px;
  height: 2px;
  width: 30px;
  background: white;
  box-shadow: 0px 0px 10px 3px red;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.1s ease-in-out;
}

.dos:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 57px;
  height: 2px;
  width: 30px;
  background: white;
  box-shadow: 0px 0px 10px 3px yellow;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.1s ease-in-out;
}

.route:focus:after {
  transform: scaleX(1);
  color: white;
}

.route:focus {
  color: white;
}

.logs {
  text-decoration: none;
  color: #808080;
  margin: 10px;
  cursor: pointer;
}

.logs:hover {
  color: white;
}

.icon {
  margin-left: 15px;
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  height: 26px;
  width: 30px;
}

.face {
  background-image: url('../../public/img/facebook-brands.svg');
}

.face:hover {
  background-image: url('../../public/img/facebook-brands-blanco.svg');
}

.ig {
  background-image: url('../../public/img/instagram-brands.svg');
}

.ig:hover {
  background-image: url('../../public/img/instagram-brands-blanco.svg');
}

.tw {
  background-image: url('../../public/img/twitter-brands.svg');
}

.tw:hover {
  background-image: url('../../public/img/twitter-brands-blanco.svg');
}

.you {
  background-image: url('../../public/img/youtube-brands.svg');
}

.you:hover {
  background-image: url('../../public/img/youtube-brands-blanco.svg');
}

.burger {
  cursor: pointer;
  background-image: url('../../public/img/bars-staggered-solid.svg');
}

.burger:hover {
  background-image: url('../../public/img/bars-staggered-blanco.svg');
}

@media only screen and (max-width: 800px) {
  .logs {
    font-size: 0.8em;
  }

  .head {
    margin-top: 20px;
    margin-left: 10px;
    background-attachment: cover;
    background-position: center center;
    background-size: cover;
    height: 16px;
    width: 20px;
  }

  .star {
    width: 30%;
  }
}

@media only screen and (max-width: 570px) {
  .star {
    width: 50%;
  }
}
</style>