<template>
    <div class="container details">
        <div class="cajaImg d-flex justify-content-center">
            <img :src="url + routeID + '.jpg'" class="nv img-fluid" alt="">
        </div>
        <div class="datos row d-flex justify-content-center">
            <h2 class="col-12 mt-5 mb-5" v-if="starShip.name != undefined">{{ starShip.name.toUpperCase() }}</h2>
            <div class="col-sm-6 mb-5 fs-5">
                Model - {{ starShip.model }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Manufacturer - {{ starShip.manufacturer }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Cost in credits - {{ starShip.cost_in_credits }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Length - {{ starShip.length }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Atmospheric speed - {{ starShip.max_atmosphering_speed }}
            </div>
            <div class="col-sm-6 mb-5 fs-5">
                Crew - {{ starShip.crew }}
            </div>
            <h4 class="text-center">Pilots</h4>
            <Pilots :urlPilots="starShip.pilots" v-if="starShip.pilots != undefined"></Pilots>
        </div>
    </div>
</template>

<script>
import Pilots from '@/components/Pilots.vue';
import { mapState } from 'vuex';

export default {
    name: "DetailsView",
    data() {
        return {
            url: "https://starwars-visualguide.com/assets/img/starships/",
            routeID: null,
            routeURLPilots: null
        };
    },
    created() {
        this.routeID = this.$route.params.id;
        this.$store.dispatch("obtenerNave", this.routeID);
    },
    computed: {
        ...mapState(["starShip", "pilots"])
    },
    components: { Pilots }
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
    height: 65vh;
    width: 60%;
    margin-bottom: 50px;
    
}

@media only screen and (max-width: 976px) {
    .nv {
        width: 100%;
    }

    .datos {
        width: 100%;
        margin: auto;
    }
}

@media only screen and (max-width: 776px) {
    .nv {
        height: 40vh;
    }
}
</style>
