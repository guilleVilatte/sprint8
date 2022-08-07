<template>
    <div class="starShip col-12 fs-5 mb-2 bg-dark ps-3" v-for="(starShip, i) in starshipsActor" :key="i">
        <img class="im" :src="url + (urlStarShips[i]).slice(-4).replace(/[^0-9]/g, '') + '.jpg'">
        <h4 class="mt-3" v-if="starShip.name != undefined">{{ starShip.name.toUpperCase() }}</h4>
        <div>Model: {{ starShip.model }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'StarShips',
    props: {
        urlStarShips: Array
    },
    data() {
        return {
            url: 'https://starwars-visualguide.com/assets/img/starships/',
            routeURLStarships: null,
        }
    },
    created() {
        this.routeURLStarships = this.$route.params.urlStarShips;
        this.$store.dispatch('obtenerStarships', this.routeURLStarships);
    },
    computed: {
        ...mapState(['starshipsActor'])
    }
}
</script>

<style scoped>
.starShip {
    width: 70%;
    margin-top: 10px;
    margin-right: 20px;
    padding: 6px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    color: rgb(168, 164, 164);
    height: 150px;
}

.im {
    height: 160px;
    width: 200px;
    border-left: 3px solid rgb(231, 231, 42);
    position: absolute;
    top: 0;
    right: 0;
}

@media only screen and (max-width: 1200px) {
    .starShip {
        width: 45%;
        height: 450px;
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
    .starShip {
        width: 80%;
    }
}
</style>