<template>
    <div>
        <div class="container starships">
            <div class="cajas d-flex d-lg-block bg-dark" v-for="(nave, i) in starShips" :key="i">
                <router-link class="rout"
                    :to="{ name: 'details', params: { id: (nave.url).slice(-4).replace(/[^0-9]/g, ''), urlPilots: nave.pilots } }"
                    style="text-decoration:none; color: gray;">
                    <div class="group">
                        <h3 class="" v-if="nave.name != undefined">{{ nave.name.toUpperCase() }}</h3>
                        <p class="fs-5">{{ nave.model }}</p>
                    </div>
                    <img class="im"
                        :src="url + (nave.url).slice(-4).replace(/[^0-9]/g, '') + '.jpg'">
                </router-link>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button @click="extender()">View More</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'StarShipsView',
    data() {
        return {
            page: 1,
            url: 'https://starwars-visualguide.com/assets/img/starships/'
        }
    },
    computed: {
        ...mapState(['starShips'])
    },
    methods: {
        extender() {
            if (this.$store.getters.getNextPage < 4) {
                this.$store.commit('viewMore');
                this.$store.dispatch('obtenerNaves', this.$store.getters.getNextPage);
            } else {
                this.nextPage = null
            }
        }
    },
    created() {
        this.$store.dispatch('obtenerNaves', this.page);
    }
}
</script>

<style scoped>
.cajas {
    width: 70%;
    margin: auto;
    margin-top: 10px;
    padding: 6px;
    height: 101px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
}

.group {
    margin-left: 15px;
}

.im {
    height: 100px;
    width: 100px;
    border-left: 3px solid rgb(231, 231, 42);
    position: absolute;
    top: 0;
    right: 0;
}

h3:hover {
    color: rgb(231, 231, 42);
}

button {
    background: gray;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    margin: 20px;
}

button:hover {
    background: rgb(231, 231, 42);
}

@media only screen and (max-width: 976px) {
    .cajas {
        width: 70%;
        height: 400px;
        margin-top: 30px;
    }

    .im {
        height: 300px;
        width: 100%;
        border-left: none;
        border-top: 3px solid rgb(231, 231, 42);
        position: absolute;
        top: auto;
        bottom: 0;
    }
}

@media only screen and (max-width: 776px) {
    .cajas {
        width: 100%;
    }
}
</style>