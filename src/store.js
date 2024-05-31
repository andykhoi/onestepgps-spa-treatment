import { createStore } from 'vuex'
import vehicles from './data/vehicles.json'

export default createStore({
  state: {
    vehicles: vehicles.vehicles
  },
  mutations: {
    setDriver(state, { index, driver }) {
      state.vehicles[index].driver = driver
    }
  },
  actions: {
    updateDriver({ commit }, payload) {
      commit('setDriver', payload)
    }
  },
  getters: {
    getVehicles: (state) => state.vehicles,
    getActiveVehicles: (state) => state.vehicles.filter((vehicle) => vehicle.status.active)
  }
})
