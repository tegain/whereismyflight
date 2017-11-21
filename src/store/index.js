import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/'

Vue.use(Vuex)

const state = {
  appSettings: {
    apiToken: JSON.parse(sessionStorage.getItem('APP_TOKEN')) || null,
    lang: 'fr', // 'en', 'fr'...
    savedSearch: null, // object with saved search detail
    isMobile: false // boolean
  },
  airportsList: [
    {'name': 'Parnu', 'city': 'Parnu', 'country': 'Estonia', 'iata': 'EPU'},
    {'name': 'Hwange National Park', 'city': 'Hwange National Park', 'country': 'Zimbabwe', 'iata': 'WKM'},
    {'name': 'Le Touquet Paris Plage', 'city': 'Le Tourquet', 'country': 'France', 'iata': 'LTQ'},
    {'name': 'Orly', 'city': 'Paris', 'country': 'France', 'iata': 'ORY'}
  ],
  appSearch: JSON.parse(localStorage.getItem('AIRPORT_SEARCH')) || null
}

const actions = {
  SearchByFlight (context, data) {
    return new Promise((resolve, reject) => {
      let flightSearch = JSON.parse(data)

      if (flightSearch !== null) {
        const flightInfos = {
          type: flightSearch.type,
          company: flightSearch.company,
          number: flightSearch.number
        }

        resolve(flightInfos)
        context.commit('SEARCH_BY_FLIGHT', flightInfos)
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  },

  SearchByAirport (context, data) {
    let APIToken = context.state.appSettings.apiToken

    return new Promise((resolve, reject) => {
      let airportSearch = JSON.parse(data)

      if (airportSearch !== null) {
        const airportInfos = {
          type: airportSearch.type,
          departure: airportSearch.departure,
          destination: airportSearch.destination,
          date: airportSearch.date
        }

        API.searchByAirport(airportInfos.departure, airportInfos.destination, airportInfos.date, APIToken)
          .then((response) => {
            let routesList = response.data.FlightStatusResource.Flights
            airportInfos.datas = routesList
            resolve(routesList)
            context.commit('SEARCH_BY_AIRPORT', airportInfos)
          })
          .catch((error) => {
            reject(new Error(`Problem with API: ${error}`))
          })
      } else {
        reject(new Error('Searching requires data'))
      }
    })
  },

  getLHToken (context) {
    return new Promise((resolve, reject) => {
      API.getLHToken().then((response) => {
        resolve('API Access Token -- OK')
        context.commit('SET_APP_TOKEN', response.data.access_token)
      }).catch((error) => {
        reject(new Error('Can\'t get API Access Token: ', error))
      })
    })
  },

  getAirportsList (context, terms) {
    let searchTerms = JSON.parse(terms.search)

    return new Promise((resolve, reject) => {
      API.getAirportsSuggestions(searchTerms)
        .then((success) => {
          resolve('coucou', searchTerms)
          // context.commit('SET_AIRPORTS_LIST', success)
        })
        .error((error) => {
          reject(new Error('error!! ->', error))
        })
    })
  }
}

const mutations = {
  SET_APP_TOKEN (state, data) {
    sessionStorage.setItem('APP_TOKEN', JSON.stringify(data))
  },

  SET_AIRPORTS_LIST (state, airports) {
    state.airportsList = airports
  },

  SEARCH_BY_FLIGHT (state, searchData) {
    state.appSearch = searchData
  },

  SEARCH_BY_AIRPORT (state, searchData) {
    state.appSearch = searchData
    localStorage.setItem('AIRPORT_SEARCH', JSON.stringify(searchData))
  }
}

const getters = {
  getApiToken: (state) => state.appSettings.apiToken,
  searchInfos: (state) => state.appSearch,
  airportsList: (state) => state.airportsList
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
