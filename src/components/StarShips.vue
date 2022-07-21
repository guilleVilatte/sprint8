<template>
    <div>
        <div>
            <div class="bg-dark" id="cajas" v-for="(nave, i) in starShips" :key="i" @click="details">
                <h4 v-if="nave.name != undefined">{{ nave.name.toUpperCase() }}</h4>
                <p>{{ nave.model }}</p>
            </div>
        </div>
         <div>
            <button @click="extender()">View More</button>
        </div>
    </div>
</template>

<script>
import { mapActions , mapState } from 'vuex'


export default {
    name: 'StarShips',
    computed: {
        ...mapState(['starShips'])
    },
    methods: {
        ...mapActions(['obtenerNaves']),
        details() {
            window.location.href = "http://localhost:8080/starships/details"
            //Aqui tendria que coger el id para mandarlo al store
        },
        extender(){
            this.obtenerNaves()
        }
    },
    created() {
        this.obtenerNaves()
    }
}
</script>


<style scoped>
#cajas {
    cursor: pointer;
    width: 70%;
    margin: auto;
    margin-top: 10px;
    padding: 6px;
}

h4,
p {
    margin-left: 15px;
}
button{
    background:rgb(231, 231, 42);
    color: black;
    font-weight: bold;
    border-radius: 5px;
    margin: 20px;
}
@media only screen and (max-width: 776px) {
    #cajas {
    width: 90%;
}
}

</style>
