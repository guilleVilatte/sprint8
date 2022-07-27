<template>
    <div>
        <div>
            <div class="cajas bg-dark" v-for="(nave, i) in starShips" :key="i" >
                <router-link class="rte" :to="{ name: 'details', params: { id: (nave.url).slice(-4).replace(/[^0-9]/g, '') } }"
                    style="text-decoration:none; color: rgb(231, 231, 42);">
                    <h5 class="group" v-if="nave.name != undefined">{{ nave.name.toUpperCase() }}</h5>
                    <p class="group">{{ nave.model }}</p>
                </router-link>
            </div>
        </div>
        <div>
            <button @click="extender()">View More</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'StarShips',
    data() {
        return {
            page: 1
        }
    },
    computed: {
        ...mapState(['starShips'])
    },
    methods: {
        ...mapActions(['obtenerNaves']),
        extender() {
            if (this.$store.getters.getNextPage < 4 ) {
                this.$store.commit('viewMore');
                console.log(this.$store.getters.getNextPage)
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
}

.group {
    margin-left: 15px;
}
h5:hover{
    color: gray;
}
button {
    background: rgb(231, 231, 42);
    color: black;
    font-weight: bold;
    border-radius: 5px;
    margin: 20px;
}

@media only screen and (max-width: 776px) {
    .cajas {
        width: 90%;
    }
}
</style>
