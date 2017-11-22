<template>
  <div class="app-Search">
    <div class="app-Search__tabs">
      <button class="app-Search__tab"
              :class="{ 'app-Search__tab--active': activeTab === 1 }"
              @click.prevent="switchTab(1)">Recherche <em>par vol</em>
      </button>
      <button class="app-Search__tab"
              :class="{ 'app-Search__tab--active': activeTab === 2 }"
              @click.prevent="switchTab(2)">Recherche <em>par route</em>
      </button>
    </div>

    <transition name="toggleform" mode="out-in">
      <div class="app-Search__content" v-if="activeTab === 1" key="number">
      <div class="app-Search__label" v-if="isMobile">Recherche par vol</div>

      <form action="#" class="app-Search__form app-Search__form--flight" data-type="flight" @submit.prevent="submitForm">
        <div class="app-Search__row">
          <label for="app-Search__company">Compagnie aérienne</label>
          <input id="app-Search__company" type="text" placeholder="ex. : Air France" v-model="flight.company" @blur="inputCompleteFill">
          <span>{{ flight.company }}</span>
        </div>

        <div class="app-Search__row">
          <label for="app-Search__number">N° du vol</label>
          <input id="app-Search__number" type="number" placeholder="ex. : 450" v-model="flight.number" @blur="inputCompleteFill">
          <span>{{ flight.number }}</span>
        </div>

        <div class="app-Search__row">
          <label for="app-Search__numberDate">Date</label>
          <input id="app-Search__numberDate" :type="isMobile ? 'date': 'text'" placeholder="jj/mm/yyyy" v-model="flight.date" @blur="inputCompleteFill">
          <span>{{ flight.date }}</span>
        </div>

        <div class="app-Search__row">
          <input type="submit" class="app-Search__submit" value="Rechercher">
        </div>
      </form>
    </div>

      <div class="app-Search__content" v-else key="airport">
      <div class="app-Search__label" v-if="isMobile">Recherche par aéroport</div>

      <form action="#" class="app-Search__form app-Search__form--airport" data-type="airport" @submit.prevent="submitForm">
        <div class="app-Search__row">
          <label for="app-Search__airportDeparture">Aéroport de départ</label>
          <input id="app-Search__airportDeparture" type="text" placeholder="ex. : CDG ou Paris" v-model="airport.departure" @blur="inputCompleteFill">
          <span>{{ airport.departure }}</span>
        </div>

        <div class="app-Search__row">
          <label for="app-Search__airportArrival">Aéroport d'arrivée</label>
          <input id="app-Search__airportArrival" type="text" placeholder="ex. : LAX ou Los Angeles" v-model="airport.destination" @blur="inputCompleteFill">
          <span>{{ airport.destination }}</span>
        </div>

        <div class="app-Search__row">
          <label for="app-Search__airportDate">Date</label>
          <input id="app-Search__airportDate" :type="isMobile ? 'date': 'text'" placeholder="yyyy/mm/dd" v-model="airport.date" @blur="inputCompleteFill">
          <datepicker></datepicker>
          <span>{{ airport.date }}</span>
        </div>

        <div class="app-Search__row">
          <input type="submit" class="app-Search__submit" value="Rechercher">
        </div>
      </form>
    </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        activeTab: 2,
        isMobile: false,
        defaultDate: '2017-11-22',
        flight: {
          company: '',
          number: '',
          date: ''
        },
        airport: {
          departure: '',
          destination: '',
          date: ''
        }
      }
    },

    computed: {
      ...mapGetters([
        'airportsList'
      ])
    },

    methods: {
      switchTab (tab) {
        this.activeTab = parseInt(tab)
      },

      getAirportsList: function (e) {
        let searchValue = JSON.stringify(e.target.value)

        if (e.target.value.length > 2) {
          this.$store.dispatch('getAirportsList', { search: searchValue })
            .then((success) => {
              console.log(success)
            })
            .catch((error) => {
              console.error(error)
            })
        } else {
          console.log(e.target.value.length)
        }
      },

      inputCompleteFill: (e) => {
        let $input = e.target

        if ($input.value !== '') {
          $input.nextElementSibling.classList.add('is-Blurred')
        }
      },

      submitForm: function (e) {
        let searchType = e.target.getAttribute('data-type')

        if (searchType === 'flight') {
          let data = {
            type: searchType,
            company: this.flight.company,
            number: this.flight.number,
            date: this.flight.date
          }

          this.searchByFlight(data)
        } else {
          let data = {
            type: searchType,
            departure: this.airport.departure,
            destination: this.airport.destination,
            date: this.airport.date
          }

          this.searchByAirport(data)
        }
      },

      searchByFlight (data) {
        let flightData = JSON.stringify(data)

        this.$store.dispatch('SearchByFlight', flightData)
          .then((response) => {
            let routeParams = {
              company: response.company.replace(/\s/g, '-'),
              number: parseInt(response.number)
            }

            this.$router.push({ name: 'Detail', params: { a: routeParams.company, b: routeParams.number } })
          })
          .catch((error) => {
            console.error(error)
          })
      },

      searchByAirport (data) {
        let airportData = JSON.stringify(data)

        this.$store.dispatch('SearchByAirport', airportData)
          .then((response) => {
            console.log(response)
            let routeParams = {
              departure: response.Flight[0].Departure.AirportCode,
              destination: response.Flight[0].Arrival.AirportCode,
              date: airportData.date
            }

            this.$router.push({ name: 'Results', params: { a: routeParams.departure, b: routeParams.destination } })
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
</script>

<style lang="scss">
  .app-Search {
    position: relative;
    margin: 10vh auto 0;
    width: 90%;
    max-width: 50rem;
    text-align: left;

    @media screen and (min-height: 768px) {
      margin: 20vh auto 0;
    }

    &__form {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      @media screen and (min-width: 768px) {
        justify-content: space-between;

        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 2rem;
          left: 0;
          bottom: 2rem;
          width: 100%;
          box-shadow: 0 1rem 4rem -.5rem rgba(#000, .7);
        }
      }
    }

    &__tabs {
      width: 100%;
      border-bottom: 1px solid rgba(#fff, .25);
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      @media screen and (min-width: 540px) {
        display: block;
      }
    }

    &__tab {
      width: 50%;
      background: none;
      border: none;
      display: inline-block;
      border-bottom: 3px solid transparent;
      padding: .75rem;
      color: #fff;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      font-size: .75rem;

      @media screen and (min-width: 540px) {
        width: auto;
      }

      &:focus {
        outline: 1px solid rgba(#fff, .1);
      }

      em {
        display: block;
        font-size: 1.5em;
        font-weight: 400;
        text-transform: none;
        font-family: 'Playfair Display', serif;

        @media screen and (min-width: 540px) {
          display: inline;
          font-size: 1.25em;
        }
      }

      &--active {
        border-color: #fff;
      }
    }

    &__content {
      width: 100%;
      padding-top: 2rem;
    }

    &__label {
      display: inline-block;
      padding: .5rem;
      border-bottom: 3px solid #fff;
      text-align: left;
    }

    &__row {
      position: relative;
      flex: 1 0 auto;
      padding-top: 2rem;
      margin-bottom: 1rem;
      width: 100%;

      &:last-child {
        margin-top: 1rem;
      }

      @media screen and (min-width: 540px) {
        width: 50%;

        &:last-child {
          margin-top: 0;
        }
      }

      @media screen and (min-width: 768px) {
        width: 33%;
      }

      @media screen and (max-width: 767px) {
        &:last-child {
          align-self: center;
          padding-top: 0;
          margin-bottom: 0;
        }
      }

      label,
      input {
        display: block;
      }

      label {
        position: absolute;
        left: 0;
        top: .5rem;
        opacity: .6;
        text-align: left;
        text-transform: uppercase;
        font-size: .65rem;
        letter-spacing: .1rem;
      }

      input {
        width: 100%;
        padding: .75rem;
        border: none;
        font-size: .75rem;
        text-transform: uppercase;
        font-family: 'Merriweather', Helvetica, Arial, sans-serif;

        &:not([type="submit"]) {
          border-right: 1px solid lighten(#242138, 70%);
          background: #fff;

          // colored border-container
          + span {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: auto;
            overflow: hidden;
            // border-top: 2px solid #333399;
            user-select: none;
            color: transparent;
            transition-duration: .4s;

            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;

              @media screen and (max-width: 539px) {
                background: linear-gradient(to right, #333399, #ff00cc);
              }
            }

            &.is-Blurred {
              transition-duration: .4s;
              width: 100%;
            }
          }
        }
      }

      @media screen and (min-width: 540px) {
        // Progressive border gradient
        &:first-child span:before {
          background: linear-gradient(to right, #333399, #473699);
        }

        &:nth-child(2) span:before {
          background: linear-gradient(to right, #473699, #633999);
        }

        &:nth-child(3) span:before {
          background: linear-gradient(to right, #633999, #773c99);
        }
      }
    }

    &__submit {
      cursor: pointer;
      background: #ff00cc;
      background: linear-gradient(to right, #333399, #ff00cc);
      background-size: 125% 100%;
      background-position: 0 0;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: .1rem;
      box-shadow: 0 1rem 1rem -.25rem rgba(#ff00cc, .15);
      transition-duration: .4s;

      @media screen and (min-width: 540px) {
        background: linear-gradient(to right, #773c99, #ff00cc);
      }

      // Background gradient transition
      &:hover {
        background-position: 95% 0;
        box-shadow: 0 1rem 1.25rem -.25rem rgba(#ff00cc, .25);
      }
    }
  }

  // Transitions
  .toggleform-enter,
  .toggleform-leave-to {
    opacity: 0;
    transform: translateY(.25rem);
    transition: opacity .25s, transform .3s;
  }

  .toggleform-enter-active,
  .toggleform-leave-active {
    position: absolute;
  }

  .toggleform-enter-to,
  .toggleform-leave {
    position: relative;
    opacity: 1;
    transform: translateY(0);
  }
</style>
