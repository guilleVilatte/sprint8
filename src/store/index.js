import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    starShips: [],
    starShip: {},
    page: 0,
    id: 0
  },
  getters: {
  },
  mutations: {
    fullStarShips:(state, shipsAction) => {
      state.starShips = state.starShips.concat(shipsAction)
    },
    oneStarShip: (state, shipAction) => {
      state.starShip = shipAction
    }
  },
  actions: {
    async obtenerNaves({commit}, state){
      //AQUI NECESITARIA LA VARIABLE GLOBAL PAGE PARA IR AUMENTANDO LA PAGINA
      //console.log(state.page)
      const ships = await axios.get(`https://swapi.dev/api/starships/?page=1`).then(response => response.data.results)
      commit('fullStarShips', ships)
      console.log(ships)
    },
    async obtenerNave({commit}){
      //AQUI NECESITARIA UNA VARIABLE GLOBAL ID
      //console.log(state.id)
      const ship = await axios.get('https://swapi.dev/api/starships/5').then(response => response.data)
      commit('oneStarShip', ship)
      console.log(ship)
    }
  },
  modules: {
  }
})
