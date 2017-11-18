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
        const flightInfos = {
          type: flightSearch.type,
          company: flightSearch.company,
          number: flightSearch.number,
          date: flightSearch.date
        }

        resolve(flightInfos)
        context.commit('SEARCH_BY_FLIGHT', flightInfos)
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  },

  SearchByAirport (context, data) {
    return new Promise((resolve, reject) => {
      let airportSearch = JSON.parse(data)

      if (airportSearch !== null) {
        const airportInfos = {
          type: airportSearch.type,
          departure: airportSearch.departure,
          destination: airportSearch.destination,
          date: airportSearch.date
        }

        resolve(airportInfos)
        context.commit('SEARCH_BY_AIRPORT', airportInfos)
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  }
}

const mutations = {
  SEARCH_BY_FLIGHT (state, searchData) {
    state.appSearch = searchData
  },

  SEARCH_BY_AIRPORT (state, searchData) {
    state.appSearch = searchData
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
