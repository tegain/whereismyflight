import Axios from 'axios'
import 'url-search-params-polyfill'

const APISettings = {
  lh: {
    key: '2cxxadzvyfqbgmtm385abrkq',
    secret: 'f7p9N6tzff',
    baseUrl: 'https://api.lufthansa.com/v1',
    authUrl: 'https://api.lufthansa.com/v1/oauth/token'
  },
  fa: {
    baseUrl: '//tegain:676e48aa9c2ea320d98a5063806f4caa12b94eed@flightxml.flightaware.com/json/FlightXML3/'
  }
}

export default {
  getLHToken () {
    let params = new URLSearchParams()
    params.append('client_id', APISettings.lh.key)
    params.append('client_secret', APISettings.lh.secret)
    params.append('grant_type', 'client_credentials')

    return Axios.post(APISettings.lh.authUrl, params)
  },

  getAirportsSuggestions (terms) {
    let fetchUrl = `${APISettings.ic.baseUrl}/autocomplete?api_key=${APISettings.ic.key}&query=${terms}`
    // console.log(fetchUrl)
    return Axios.get(fetchUrl)
  },

  getAirportFullName (code) {
    let fetchUrl = `${APISettings.fa.baseUrl}/AirportInfo?airport_code=${code}`

    return Axios.get(fetchUrl)
  },

  searchByAirport (departure, destination, date, token) {
    let fetchUrl = `${APISettings.lh.baseUrl}/operations/flightstatus/route/${departure}/${destination}/${date}`
    let params = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    return Axios.get(fetchUrl, { headers: params })
  }
}
