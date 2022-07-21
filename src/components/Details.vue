<template>
    <div>
        <div class="cajaImg d-flex justify-content-center">
            <img :src="url+id+'.jpg'" class="img-fluid" alt="">
        </div>
        <div class="row d-flex justify-content-center">
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
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Details',
    data(){
        return{
            id: 9,
            url: 'https://starwars-visualguide.com/assets/img/starships/'
        }
    },
    computed: {
        ...mapState(['starShip'])
        //AQUI TOMARIA EL ID DEL STORE PARA LLAMAR A LA IMAGEN DE LA NAVE
    },
    methods: {
        ...mapActions(['obtenerNave'])
    },
    created() {
        this.obtenerNave()
    }
}
</script>


<style scoped>
img {
    height: 50vh;
}
.col-6{
    margin-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
}
.cajaImg{
    border-bottom: 3px solid rgb(173, 3, 3);
}
</style>
