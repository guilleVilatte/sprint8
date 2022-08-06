<template>
    <div class="piloto col-12 fs-5 mb-5 bg-dark ps-3" v-for="(piloto, i) in pilots" :key="i">
        <img class="im" :src="url + (urlPilots[i]).slice(-4).replace(/[^0-9]/g, '') + '.jpg'">
        <h4 class="mt-3" v-if="piloto.name != undefined">{{ piloto.name.toUpperCase() }}</h4>
        <div>Gender: {{ piloto.gender }}</div>
        <div>Height: {{ piloto.height }}</div>
        <div>Mass: {{ piloto.mass }}</div>
        <div>Skin Color: {{ piloto.skin_color }}</div>
        <div>Birth Year: {{ piloto.birth_year }}</div>
        <div class="mb-3">Eye Color: {{ piloto.eye_color }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Pilots',
    props: {
        urlPilots: Array
    },
    data() {
        return {
            url: 'https://starwars-visualguide.com/assets/img/characters/',
            routeURLPilots: null,
        }
    },
    created() {
        this.routeURLPilots = this.$route.params.urlPilots;
        this.$store.dispatch('obtenerPilots', this.routeURLPilots);
        console.log(this.urlPilots)
    },
    computed: {
        ...mapState(['pilots'])
    }
}
</script>

<style scoped>
.piloto {
    width: 45%;
    margin-top: 10px;
    margin-right: 20px;
    padding: 6px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    color: rgb(168, 164, 164);
}

.im {
    height: 260px;
    width: 200px;
    border-left: 3px solid rgb(231, 231, 42);
    position: absolute;
    top: 0;
    right: 0;
}

@media only screen and (max-width: 1200px) {
    .piloto {
        width: 45%;
        height: 570px;
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
    .piloto {
        width: 80%;
        height: 550px;
    }
}
</style>