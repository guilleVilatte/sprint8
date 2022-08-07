<template>
    <div class="film col-12 fs-5 mb-2 bg-dark ps-3" v-for="(film, i) in films" :key="i">
        <img class="im" :src="url + (urlFilms[i]).slice(-4).replace(/[^0-9]/g, '') + '.jpg'">
        <h4 class="mt-3" v-if="film.title != undefined">{{ film.title.toUpperCase() }}</h4>
        <div>director: {{ film.director }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Films',
    props: {
        urlFilms: Array
    },
    data() {
        return {
            url: 'https://starwars-visualguide.com/assets/img/films/',
            routeURLFilms: null,
        }
    },
    created() {
        this.routeURLFilms = this.$route.params.urlFilms;
        this.$store.dispatch('obtenerFilms', this.routeURLFilms);
    },
    computed: {
        ...mapState(['films'])
    }
}
</script>

<style scoped>
.film {
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
    width: 150px;
    border-left: 3px solid rgb(231, 231, 42);
    position: absolute;
    top: 0;
    right: 0;
}

@media only screen and (max-width: 1200px) {
    .film {
        width: 45%;
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
        transform: translate(0, 0);
    }
}

@media only screen and (max-width: 776px) {
    .film {
        width: 80%;
        height: 400px;
    }
}
</style>