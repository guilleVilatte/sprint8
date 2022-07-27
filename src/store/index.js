import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    starShips: [],
    starShip: {},
    nextPage: 1,
    showModalLog: false,
    showModalReg: false
  },
  getters: {
    getNextPage(state) {
      return state.nextPage;
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
    },
    viewMore: (state) => {
      state.nextPage++
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
    }
  },
  modules: {
  }
})
