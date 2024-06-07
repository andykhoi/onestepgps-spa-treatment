// import Vue from 'vue'
import { createStore } from 'vuex'
import vehicles from './data/vehicles.json'
import drivers from './data/drivers.json'

export default createStore({
  state: {
    drivers: drivers,
    vehicles: vehicles.vehicles,
    modal: {
      modalName: '',
      id: ''
    }
  },
  mutations: {
    DELETE_DRIVER(state, driverId) {
      const driverIndex = state.drivers.findIndex((driver) => driver.id === driverId)
      state.drivers = [
        ...state.drivers.slice(0, driverIndex),
        ...state.drivers.slice(driverIndex + 1)
      ]
    },
    UPDATE_DRIVER(state, updatedDriver) {
      const driverIndex = state.drivers.findIndex((driver) => driver.id === updatedDriver.id)

      state.drivers = [
        ...state.drivers.slice(0, driverIndex),
        updatedDriver,
        ...state.drivers.slice(driverIndex + 1)
      ]
    },
    ADD_DRIVER(state, driver) {
      state.drivers.unshift(driver)
    },
    SET_ACTIVE_MODAL(state, { modalName, id }) {
      state.modal = { modalName, id }
    },
    CLOSE_MODAL(state) {
      state.modal = {
        modalName: '',
        id: ''
      }
    }
  },
  actions: {
    deleteDriver({ commit }, driverId) {
      commit('DELETE_DRIVER', driverId)
    },
    updateDriver({ commit }, updatedDriver) {
      commit('UPDATE_DRIVER', updatedDriver)
    },
    addDriver({ commit }, driver) {
      commit('ADD_DRIVER', driver)
    },
    showModal({ commit }, { modalName, id }) {
      commit('SET_ACTIVE_MODAL', { modalName, id })
    },
    closeModal({ commit }) {
      commit('CLOSE_MODAL')
    }
  },
  getters: {
    getModal: (state) => state.modal,
    getVehicles: (state) => state.vehicles,
    getActiveVehicles: (state) => state.vehicles.filter((vehicle) => vehicle.status.active),
    getDrivers: (state) => state.drivers,
    getDriverFromId: (state) => (id) => {
      const driverIndex = state.drivers.findIndex((driver) => driver.id === id)
      return state.drivers[driverIndex]
    }
  }
})
