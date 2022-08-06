<template>
    <div class="">
        <div class="modal three ">
            <div @click="closeModalBurger()" class="icon close"></div>
            <nav class="d-flex align-items-center col-12 mt-4 ms-3">
                <a class="logs fs-6" @click="viewLog()">LOG IN </a> //
                <a class="logs fs-6" @click="viewReg()"> SIGN UP</a>
            </nav>
            <nav class="mt-4 ms-3">
                <router-link class="rt mt-3 ms-3" @click="closeModalBurger()" to="/">HOME</router-link>
                <router-link class="rt mt-3 ms-3" @click="closeModalBurger()" to="/starships">STARSHIPS</router-link>
                <router-link class="rt mt-3 ms-3" @click="closeModalBurger()" to="/actors">ACTORS</router-link>
            </nav>
            <div class="iconos d-flex justify-content-center ">
                <a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699" target="_blank">
                    <div class="icon face"></div>
                </a>
                <a href="https://www.instagram.com/starwars/" target="_blank">
                    <div class="icon ig"></div>
                </a>
                <a href="https://twitter.com/starwars" target="_blank">
                    <div class="icon tw"></div>
                </a>
                <a href="https://www.youtube.com/user/starwars" target="_blank">
                    <div class="icon you"></div>
                </a>
            </div>
        </div>
        <div class="modal-overlay "></div>
    </div>
</template>

<script>
export default {
    methods: {
        viewLog() {
            this.$store.commit("viewLogin");
        },
        viewReg() {
            this.$store.commit("viewRegister");
        },
        closeModalBurger() {
            this.$store.commit("closeModalBurger");
        }
    }
}
</script>

<style scoped>
.three {
    background: black;
    height: 100vh;
    width: 55%;
    text-align: start;
    top: 0;
    left: 0;
    border-radius: 0;
}

.logs:hover {
    color: gray;
}

.rt {
    display: block;
    text-decoration: none;
    color: white;
}

.iconos{
    position: absolute;
    bottom: 70px;
}
</style>