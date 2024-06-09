// // import Vue from 'vue'
// import { createStore } from 'vuex'
// import vehicles from './data/vehicles.json'
// import drivers from './data/drivers.json'

// export default createStore({
//   state: {
//     activeContent: 'vehicles',
//     drivers: drivers,
//     vehicles: vehicles,
//     modal: {
//       modalName: '',
//       id: ''
//     },
//     driverFilters: {
//       searchText: ''
//     }
//   },
//   mutations: {
//     UPDATE_ACTIVE_CONTENT(state, activeContent) {
//       state.activeContent = activeContent
//     },
//     DELETE_VEHICLE(state, vehicleId) {
//       const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === vehicleId)

//       state.vehicles = [
//         ...state.vehicles.slice(0, vehicleIndex),
//         ...state.vehicles.slice(vehicleIndex + 1)
//       ]
//     },
//     UPDATE_VEHICLE(state, updatedVehicle) {
//       const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === updatedVehicle.id)

//       state.vehicles = [
//         ...state.vehicles.slice(0, vehicleIndex),
//         updatedVehicle,
//         ...state.vehicles.slice(vehicleIndex + 1)
//       ]
//     },
//     ADD_VEHICLE(state, vehicle) {
//       state.vehicles.unshift(vehicle)
//     },
//     DELETE_DRIVER(state, driverId) {
//       const driverIndex = state.drivers.findIndex((driver) => driver.id === driverId)
//       state.drivers = [
//         ...state.drivers.slice(0, driverIndex),
//         ...state.drivers.slice(driverIndex + 1)
//       ]
//     },
//     UPDATE_DRIVER(state, updatedDriver) {
//       const driverIndex = state.drivers.findIndex((driver) => driver.id === updatedDriver.id)

//       state.drivers = [
//         ...state.drivers.slice(0, driverIndex),
//         updatedDriver,
//         ...state.drivers.slice(driverIndex + 1)
//       ]
//     },
//     ADD_DRIVER(state, driver) {
//       state.drivers.unshift(driver)
//     },
//     SET_ACTIVE_MODAL(state, { modalName, id }) {
//       state.modal = { modalName, id }
//     },
//     CLOSE_MODAL(state) {
//       state.modal = {
//         modalName: '',
//         id: ''
//       }
//     }
//   },
//   actions: {
//     updateActiveContent({ commit }, newActiveContent) {
//       commit('UPDATE_ACTIVE_CONTENT', newActiveContent)
//     },
//     deleteVehicle({ commit }, vehicleId) {
//       commit('DELETE_VEHICLE', vehicleId)
//     },
//     updateVehicle({ commit, dispatch, getters }, updatedVehicle) {
//       // make sure the new/updated vehicle's driver is not on another vehicle - if so remove from old vehicle
//       if (updatedVehicle.driverId !== '') {
//         const vehicle = getters.getVehiclefromDriverId(updatedVehicle.driverId)
//         if (vehicle && vehicle.id !== updatedVehicle.id) {
//           dispatch('updateVehicle', {
//             ...vehicle,
//             driverId: ''
//           })
//         }
//       }

//       commit('UPDATE_VEHICLE', updatedVehicle)
//     },
//     addVehicle({ commit, dispatch, getters }, vehicle) {
//       if (vehicle.driverId !== '') {
//         const vehicleCheck = getters.getVehiclefromDriverId(vehicle.driverId)
//         if (vehicleCheck && vehicleCheck.id !== vehicle.id) {
//           dispatch('updateVehicle', {
//             ...vehicleCheck,
//             driverId: ''
//           })
//         }
//       }
//       const enrichedVehicleData = {
//         ...vehicle,
//         status: {
//           active: false,
//           location: 'Los Angeles, CA',
//           bearing: Math.floor(Math.random() * 360),
//           speed: Math.floor(Math.random() * 100)
//         }
//       }
//       commit('ADD_VEHICLE', enrichedVehicleData)
//     },
//     deleteDriver({ commit }, driverId) {
//       commit('DELETE_DRIVER', driverId)
//     },
//     updateDriver({ commit }, updatedDriver) {
//       commit('UPDATE_DRIVER', updatedDriver)
//     },
//     addDriver({ commit }, driver) {
//       commit('ADD_DRIVER', driver)
//     },
//     showModal({ commit }, { modalName, id }) {
//       commit('SET_ACTIVE_MODAL', { modalName, id })
//     },
//     closeModal({ commit }) {
//       commit('CLOSE_MODAL')
//     }
//   },
//   getters: {
//     getActiveContent: (state) => state.activeContent,
//     getModal: (state) => state.modal,
//     getVehicles: (state) => state.vehicles,
//     getActiveVehicles: (state) => state.vehicles.filter((vehicle) => vehicle.status.active),
//     getDrivers: (state) => {
//       //   state.drivers
//       const filteredDrivers = state.drivers.filter((driver) => {
//         for (const property in driver) {
//           if (driver[property].includes(state.driverFilters.searchText)) {
//             return driver
//           }
//         }
//       })
//       console.log(filteredDrivers)
//       return filteredDrivers
//     },
//     getDriverFromId: (state) => (id) => {
//       const driverIndex = state.drivers.findIndex((driver) => driver.id === id)
//       return state.drivers[driverIndex]
//     },
//     getVehicleFromId: (state) => (id) => {
//       const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === id)
//       return state.vehicles[vehicleIndex]
//     },
//     getVehiclefromDriverId: (state) => (id) => {
//       const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.driverId === id)
//       return state.vehicles[vehicleIndex]
//     }
//   }
// })

import { createStore } from 'vuex'
import vehicles from './data/vehicles.json'
import drivers from './data/drivers.json'

export default createStore({
  state: {
    activeContent: 'vehicles',
    drivers: drivers,
    vehicles: vehicles,
    modal: {
      modalName: '',
      id: ''
    },
    driverFilters: {
      searchText: ''
    }
  },
  mutations: {
    UPDATE_ACTIVE_CONTENT(state, activeContent) {
      state.activeContent = activeContent
    },
    DELETE_VEHICLE(state, vehicleId) {
      const vehicleIndex = state.vehicles.findIndex((vehicle) => vehicle.id === vehicleId)

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
    },
    SET_DRIVER_FILTER_SEARCH_TEXT(state, searchText) {
      state.driverFilters.searchText = searchText
    }
  },
  actions: {
    updateActiveContent({ commit }, newActiveContent) {
      commit('UPDATE_ACTIVE_CONTENT', newActiveContent)
    },
    deleteVehicle({ commit }, vehicleId) {
      commit('DELETE_VEHICLE', vehicleId)
    },
    updateVehicle({ commit, dispatch, getters }, updatedVehicle) {
      // make sure the new/updated vehicle's driver is not on another vehicle - if so remove from old vehicle
      if (updatedVehicle.driverId !== '') {
        const vehicle = getters.getVehiclefromDriverId(updatedVehicle.driverId)
        if (vehicle && vehicle.id !== updatedVehicle.id) {
          dispatch('updateVehicle', {
            ...vehicle,
            driverId: ''
          })
        }
      }

      commit('UPDATE_VEHICLE', updatedVehicle)
    },
    addVehicle({ commit, dispatch, getters }, vehicle) {
      if (vehicle.driverId !== '') {
        const vehicleCheck = getters.getVehiclefromDriverId(vehicle.driverId)
        if (vehicleCheck && vehicleCheck.id !== vehicle.id) {
          dispatch('updateVehicle', {
            ...vehicleCheck,
            driverId: ''
          })
        }
      }
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
    },
    setDriverFilterSearchText({ commit }, searchText) {
      commit('SET_DRIVER_FILTER_SEARCH_TEXT', searchText)
    }
  },
  getters: {
    getActiveContent: (state) => state.activeContent,
    getModal: (state) => state.modal,
    getVehicles: (state) => state.vehicles,
    getActiveVehicles: (state) => state.vehicles.filter((vehicle) => vehicle.status.active),
    getDrivers: (state) => {
      if (state.driverFilters.searchText) {
        return state.drivers.filter((driver) => {
          return Object.values(driver).some(
            (value) => typeof value === 'string' && value.includes(state.driverFilters.searchText)
          )
        })
      }
      return state.drivers
    },
    getDriverFromId: (state) => (id) => {
      return state.drivers.find((driver) => driver.id === id)
    },
    getVehicleFromId: (state) => (id) => {
      return state.vehicles.find((vehicle) => vehicle.id === id)
    },
    getVehiclefromDriverId: (state) => (id) => {
      return state.vehicles.find((vehicle) => vehicle.driverId === id)
    }
  }
})
