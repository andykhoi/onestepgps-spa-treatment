// import Vue from 'vue'
import { createStore } from 'vuex'
import vehicles from './data/vehicles.json'
import drivers from './data/drivers.json'

export default createStore({
  state: {
    drivers: drivers,
    vehicles: vehicles,
    modal: {
      modalName: '',
      id: ''
    }
  },
  mutations: {
    DELETE_VEHICLE(state, updatedVehicle) {
      const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === updatedVehicle.id)

      state.vehicles = [
        ...state.vehicles.slice(0, vehicleIndex),
        ...state.vehicles.slice(vehicleIndex + 1)
      ]
    },
    UPDATE_VEHICLE(state, updatedVehicle) {
      const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === updatedVehicle.id)

      state.vehicles = [
        ...state.vehicles.slice(0, vehicleIndex),
        updatedVehicle,
        ...state.vehicles.slice(vehicleIndex + 1)
      ]
    },
    ADD_VEHICLE(state, vehicle) {
      state.vehicles.unshift(vehicle)
    },
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
    updateVehicle({ commit }, updatedVehicle) {
      commit('UPDATE_VEHICLE', updatedVehicle)
    },
    addVehicle({ commit }, vehicle) {
      const enrichedVehicleData = {
        ...vehicle,
        status: {
          active: false,
          location: 'Los Angeles, CA',
          bearing: Math.floor(Math.random() * 360),
          speed: Math.floor(Math.random() * 100)
        }
      }
      commit('ADD_VEHICLE', enrichedVehicleData)
    },
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
    },
    getVehicleFromId: (state) => (id) => {
      const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === id)
      return state.vehicles[vehicleIndex]
    }
  }
})
