import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    starShips: [],
    starShip: {},
    pilots: [],
    actors: [],
    nextPage: 1,
    nextPageActors:1,
    showModalLog: false,
    showModalReg: false,
    storeEmail: "",
    showBurgerModal: false
  },
  getters: {
    getNextPage(state) {
      return state.nextPage;
    },
    getNextPageActors(state) {
      return state.nextPageActors;
    },
    getStarShips(state) {
      return state.starShips;
    },
    getActors(state) {
      return state.actors;
    }
  },
  mutations: {
    fullStarShips: (state, shipsAction) => {
      let control;
      let models = state.starShips.map(starShips => starShips.model)
      for (let i = 0; i < shipsAction.length; i++) {
        control = models.indexOf(shipsAction[i].model)
      }
      if (state.starShips[0] == undefined || control == -1) {
        state.starShips = state.starShips.concat(shipsAction)
      }
    },
    oneStarShip: (state, shipAction) => {
      state.starShip = shipAction
      console.log(state.starShip.pilots)
    },
    pilots: (state, pilotsAction) => {
      state.pilots = pilotsAction
      console.log(state.pilots)
    },
    fullActors: (state, actorsAction) => {
      let control;
      let models = state.actors.map(actors => actors.name)
      for (let i = 0; i < actorsAction.length; i++) {
        control = models.indexOf(actorsAction[i].name)
      }
      if (state.actors[0] == undefined || control == -1) {
        state.actors = state.actors.concat(actorsAction)
      }
    },
    viewMore: (state) => {
      state.nextPage++
    },
    viewMoreActors: (state) => {
      state.nextPageActors++
    },
    viewLogin: (state) => {
      state.showModalLog = true
    },
    viewRegister: (state) => {
      state.showModalReg = true
    },
    closeModal: (state) => {
      state.showModalLog = false
      state.showModalReg = false
    },
    closeModalBurger: (state) => {
      state.showBurgerModal = false
    },
    mostrarEmail: (state, email) => {
      state.storeEmail = email
      console.log(state.storeEmail)
    },
    mostrarBurgerModal: (state) => {
      state.showBurgerModal = true
    }
  },
  actions: {
    async obtenerNaves({ commit }, page) {
      const ships = await axios.get(`https://swapi.py4e.com/api/starships/?page=${page}`).then(response => response.data.results)
      commit('fullStarShips', ships)
    },
    async obtenerNave({ commit }, id) {
      const ship = await axios.get(`https://swapi.py4e.com/api/starships/${id}`).then(response => response.data)
      commit('oneStarShip', ship)
    },
    async obtenerPilots({ commit }, url) {
      console.log(url)
      const pilot = []
      if (url != undefined) {
        for (let i = 0; i < url.length; i++) {
          pilot.push(await axios.get(url[i]).then(response => response.data))
        }
        commit('pilots', pilot)
        console.log(pilot)
      }
    },
    async obtenerActores({ commit }, page) {
      const actores = await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`).then(response => response.data.results)
      commit('fullActors', actores)
    }
  },
  modules: {
  }
})
