<template>
  <v-card flat>
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="teal"
      dark
      shift
    >
      <v-btn
        color="white"
        flat
        value="recent"
      >
        <span>Inicio</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn dark
        color="white"
        flat
        value="search"
      >
        <span>Descubrir</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="favorite"
      >
        <span>Favoritos</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="person"
      >
        <span>Cuenta</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: '3'
      }
    }
  }
</script>

<style scoped>
    .v-item-group{
        position: fixed !important;
    }
</style>
