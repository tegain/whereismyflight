import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  appSettings: {
    lang: 'fr', // 'en', 'fr'...
    savedSearch: null, // object with saved search detail
    isMobile: false // boolean
  },
  appSearch: null
}

const actions = {
  SearchByFlight (context, data) {
    return new Promise((resolve, reject) => {
      let flightSearch = JSON.parse(data)

      if (flightSearch !== null) {
        resolve(data)

        const flightInfos = {
          type: flightSearch.type,
          company: flightSearch.company,
          number: flightSearch.number,
          date: flightSearch.date
        }

        context.commit('SEARCH_FLIGHT', flightInfos)
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  },

  SearchByAirport (context, data) {
    return new Promise((resolve, reject) => {
      let airportSearch = JSON.parse(data)

      if (airportSearch !== null) {
        resolve(data)

        const airportInfos = {
          type: airportSearch.type,
          departure: airportSearch.departure,
          destination: airportSearch.destination,
          date: airportSearch.date
        }

        context.commit('SEARCH_AIRPORT', airportInfos)
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  }
}

const mutations = {
  SEARCH_FLIGHT (state, data) {
    let searchFlightData = JSON.parse(data)
    state.appSearch = searchFlightData
  },

  SEARCH_AIRPORT (state, data) {
    let searchAirportData = JSON.parse(data)
    state.appSearch = searchAirportData
  }
}

const getters = {
  searchInfos: (state) => state.appSearch
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
