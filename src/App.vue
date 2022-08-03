<template>
  <div class="container">
    <div class="img row d-flex justify-content-center">
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
      <img class="star img-fluid col-6 col-sm-4 m-auto" src="../public/img/unnamed.jpg" alt="">
      <nav class="d-flex justify-content-end align-items-center col-6 col-sm-4">
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
        <form @submit="ds">
          <input type="text" class="col-10" placeholder="Email Adress" v-model="email" required id="email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}">
          <div v-if="invalidEmail" class="text-danger">Please enter a valid email address.</div>
          <button type="btn" class="btn btn-secondary text-white col-10">Continue</button>
        </form>
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
    <nav class="routes d-flex justify-content-center mb-1">
      <router-link class="route uno" to="/">HOME</router-link>
      <router-link class="route dos" to="/starships">STARSHIPS</router-link>
    </nav>
    <router-view></router-view>
    <div class="d-flex flex-column justify-content-center align-items-center mt-5">
      <div class="ms-2">
        FOLLOW STAR WARS:
      </div>
      <div class="col-4 d-flex justify-content-center ">
        <a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699" target="_blank" class="m-2">
          <div class="icon face"></div>
        </a>
        <a href="https://www.instagram.com/starwars/" target="_blank" class="m-2">
          <div class="icon ig"></div>
        </a>
        <a href="https://twitter.com/starwars" target="_blank" class="m-2">
          <div class="icon tw"></div>
        </a>
        <a href="https://www.youtube.com/user/starwars" target="_blank" class="m-2">
          <div class="icon you"></div>
        </a>
      </div>
      <p class="mt-4">
        TM & © Lucasfilm Ltd. All Rights Reserved
      </p>
      <div class="text-center my-2">
        <div class="d-md-inline"><a class="link" href="https://disneytermsofuse.com/" target="_blank"> Terms of Use |</a>
        </div>
        <div class="d-md-inline"><a class="link" href="https://support.disney.com/hc/en-gb" target="_blank"> Additional
            Content Information |</a></div>
        <div class="d-md-inline"><a class="link" href="https://privacy.thewaltdisneycompany.com/en/"
            target="_blank"> Privacy Policy |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            target="_blank"> Children’s Online Privacy Policy |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
            target="_blank"> Your California Privacy Rights |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"
            target="_blank"> Star Wars at shopDisney |</a></div>
        <div class="d-md-inline"><a class="link" href="https://support.starwars.com/hc/en-us" target="_blank"> Star Wars Helpdesk |</a></div>
        <div class="d-md-inline"><a class="link" href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"
            target="_blank"> Interest-Based Ads |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d"
            target="_blank"> Do Not Sell My Personal Information</a> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      invalidEmail: false
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
    passVisible(){
      
    }
  }
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

.img-fluid {
  width: 26%;
  margin-right: 45px;
}

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
.uno:after{
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
.dos:after{
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

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  height: 120vh;
}

.modal {
  display: block;
  border-radius: 10px;
  height: 300px;
  width: 45%;
  text-align: center;
  position: fixed;
  top: 30%;
  left: 30%;
}

.two {
  height: 600px;
  top: 10%;
}

.btn:hover {
  background: rgb(56, 56, 155);
}

input {
  border-radius: 7px;
  height: 40px;
  margin-bottom: 10px;
  background: rgb(194, 192, 192);
  color: rgb(169, 169, 16);
  cursor: text;
}
input:focus{
  background: rgb(108, 107, 107);

}
.close {
  width: 50px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.check {
  height: 12px;
  width: 12px;
  margin-left: 10px;
  line-height: 30px;
  cursor: default;
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
  background-image: url('../public/img/facebook-brands.svg');
}

.face:hover {
  background-image: url('../public/img/facebook-brands-blanco.svg');
}

.ig {
  background-image: url('../public/img/instagram-brands.svg');
}

.ig:hover {
  background-image: url('../public/img/instagram-brands-blanco.svg');
}

.tw {
  background-image: url('../public/img/twitter-brands.svg');
}

.tw:hover {
  background-image: url('../public/img/twitter-brands-blanco.svg');
}

.you {
  background-image: url('../public/img/youtube-brands.svg');
}

.you:hover {
  background-image: url('../public/img/youtube-brands-blanco.svg');
}

.link {
  text-decoration: none;
  color: #808080;
  position: relative;
  letter-spacing: 0.5px;
}

.link:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #808080;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
}

.link:hover:after {
  transform: scaleX(1);
}

@media only screen and (max-width: 1050px) {
  .modal {
    width: 60%;
    left: 20%;
  }

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

  .modal {

    width: 70%;
    left: 15%;
  }

  .star {
    width: 30%;
  }
}

@media only screen and (max-width: 600px) {
  .modal {

    width: 100%;
    left: 0;
  }

  .star {
    width: 50%;
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
