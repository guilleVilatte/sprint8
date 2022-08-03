<template>
    <div class="container">
        <div class="cajaImg d-flex justify-content-center">
            <img :src="url+routeID+'.jpg'" class="img-fluid" alt="">
        </div>
        <div class="datos row d-flex justify-content-center">
            <h2 class="col-12 mt-5 mb-5" v-if="starShip.name != undefined">{{ starShip.name.toUpperCase() }}</h2>
            <div class="col-sm-6 mb-5">
                Model - {{ starShip.model }}
            </div>
            <div class="col-sm-6 mb-5">
                Manufacturer - {{ starShip.manufacturer }}
            </div>
            <div class="col-sm-6 mb-5">
                Cost in credits - {{ starShip.cost_in_credits }}
            </div>
            <div class="col-sm-6 mb-5">
                Length - {{ starShip.length }}
            </div>
            <div class="col-sm-6 mb-5">
                Atmospheric speed - {{ starShip.max_atmosphering_speed }}
            </div>
            <div class="col-sm-6 mb-5">
                Crew - {{ starShip.crew }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Details',
    data(){
        return{
            url: 'https://starwars-visualguide.com/assets/img/starships/',
            routeID: null,
            id: this.$route.params.id
        }
    },
    created() {
        this.routeID = this.$route.params.id;
        this.$store.dispatch('obtenerNave', this.routeID );
    },
    computed: {
        ...mapState(['starShip'])
    }
}
</script>


<style scoped>
.container{
    width: 80%;
}
.datos{
    width: 80%;
    margin:auto;
}
img {
    height: 65vh;
    width: 80%;
    border-bottom: 3px solid rgb(173, 3, 3);
}
.col-6{
    margin-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
}

@media only screen and (max-width: 976px) {
    .container {
        width: 100%;
    }
    img {
        width: 100%;
    }
    .datos{
        width: 100%;
        margin:auto;
    }
}
@media only screen and (max-width: 776px) {
    img {
        height: 40vh;
    }   
}
</style>
