<template>
  <div class="app-Search">
    <div class="app-Search__tab">
      <div class="app-Search__label">Recherche par vol</div>

      <form action="#" class="app-Search__form app-Search__form--flight" @submit.prevent="submitForm()">
        <div class="app-Search__row">
          <label for="app-Search__company">Compagnie aérienne</label>
          <input id="app-Search__company" type="text" placeholder="ex. : Air France">
        </div>

        <div class="app-Search__row">
          <label for="app-Search__number">N° du vol</label>
          <input id="app-Search__number" type="number" placeholder="ex. : 450">
        </div>

        <div class="app-Search__row">
          <label for="app-Search__numberDate">Date</label>
          <input id="app-Search__numberDate" type="date" placeholder="Date">
        </div>

        <input type="submit" class="app-Search__submit" value="Rechercher">
      </form>
    </div>

    <div class="app-Search__tab">
      <div class="app-Search__label">Recherche par aéroport</div>

      <form action="#" class="app-Search__form app-Search__form--airport" @submit.prevent="submitForm()">
        <div class="app-Search__row">
          <label for="app-Search__airportDeparture">Aéroport de départ</label>
          <input id="app-Search__airportDeparture" type="text" placeholder="ex. : CDG ou Paris">
        </div>

        <div class="app-Search__row">
          <label for="app-Search__airportArrival">Aéroport d'arrivée</label>
          <input id="app-Search__airportArrival" type="text" placeholder="ex. : LAX ou Los Angeles">
        </div>

        <div class="app-Search__row">
          <label for="app-Search__airportDate">Date</label>
          <input id="app-Search__airportDate" type="date" placeholder="Date">
        </div>

        <input type="submit" class="app-Search__submit" value="Rechercher">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 1
      }
    },

    methods: {
      submitForm (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss">
  .app-Search {

  }
</style>
