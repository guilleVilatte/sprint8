<template>
    <div class="container details">
        <div class="cajaImg d-flex justify-content-center">
            <img :src="url + routeID + '.jpg'" class="nv img-fluid" alt="">
        </div>
        <div class="datos row d-flex justify-content-center">
            <h2 class="col-12 mt-5 mb-5" v-if="actor.name != undefined">{{ actor.name.toUpperCase() }}</h2>
            <div class="col-sm-6 mb-5 fs-5">
                Gender - {{ actor.gender }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Height - {{ actor.height }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Mass - {{ actor.mass }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Skin Color - {{ actor.skin_color }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Birth Year - {{ actor.birth_year }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Eye Color - {{ actor.eye_color }}
            </div>
            <h4 class="text-center">Films</h4>
            <Films :urlFilms="actor.films" v-if="actor.films != undefined"></Films>
            <h4 class="text-center mt-5">Starships</h4>
            <StarShips :urlStarShips="actor.starships" v-if="actor.starships != undefined"></StarShips>
        </div>
    </div>
</template>

<script>
import Films from '@/components/Films.vue';
import StarShips from '@/components/StarShips.vue';
import { mapState } from 'vuex';

export default {
    name: "DetailsActorsView",
    data() {
        return {
            url: "https://starwars-visualguide.com/assets/img/characters/",
            routeID: null,
            routeURLFilms: null,
            routeURLStarships: null
        };
    },
    created() {
        this.routeID = this.$route.params.id;
        this.$store.dispatch("obtenerActor", this.routeID);
    },
    computed: {
        ...mapState(["actor", "films", "starshipsActor" ])
    },
    components: { Films, StarShips }
}
</script>


<style scoped>

.datos {
    width: 80%;
    margin: auto;
    border-top: 3px solid rgb(173, 3, 3);
    color: white;
}

.nv {
    height: 550px;
    width: 40%;
    margin-bottom: 50px;
    
}

@media only screen and (max-width: 976px) {
    .nv {
        width: 80%;
    }

    .datos {
        width: 100%;
        margin: auto;
    }
}

@media only screen and (max-width: 776px) {
    .nv {
        height: 450px;
    }
}
</style>