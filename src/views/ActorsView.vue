<template>
    <div>
        <div class="container row">
            <div class="cajas col-6 d-flex d-lg-block bg-dark" v-for="(actor, i) in actors" :key="i" >
                <router-link class="rout"
                    :to="{ name: 'detailsActors', params: { id: (actor.url).slice(-4).replace(/[^0-9]/g, ''), urlFilms: actor.films, urlStarShips: actor.starships } }"
                    style="text-decoration:none; color: gray;">
                    <div class="group">
                        <h3 class="" v-if="actor.name != undefined">{{ actor.name.toUpperCase() }}</h3>
                        <p class="fs-5" >{{ actor.gender }}</p>
                        <img class="im"
                        :src="'https://starwars-visualguide.com/assets/img/characters/' + (actor.url).slice(-4).replace(/[^0-9]/g, '') + '.jpg'"
                        alt="">
                    </div>
                    
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
    name: 'ActorsView',
    data() {
        return {
            page: 1,
        }
    },
    computed: {
        ...mapState(['actors'])
    },
    methods: {
        extender() {
            if (this.$store.getters.getNextPageActors < 9) {
                this.$store.commit('viewMoreActors');
                console.log(this.$store.getters.getNextPageActors)
                this.$store.dispatch('obtenerActores', this.$store.getters.getNextPageActors);
            } else {
                this.nextPage = null
            }
        }
    },
    created() {
        this.$store.dispatch('obtenerActores', this.page);
    }
}
</script>

<style scoped>
.cajas {
    width: 40%;
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

@media only screen and (max-width: 1206px) {
    .cajas {
        width: 40%;
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

@media only screen and (max-width: 876px) {
    .cajas {
        width: 48%;
    }
}
@media only screen and (max-width: 576px){
  .cajas {
        width: 80%;
    }
}
@media only screen and (max-width: 576px){
  .cajas {
        width: 100%;
    }
}
</style>
