<template>
  <v-card flat>
    <!-- <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div> -->
    <v-bottom-nav :value="true" absolute shift>
      <router-link tag="li" to="/">
        <v-btn color="teal" flat value="recent">
          <span>Inicio</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/profile">
      <v-btn dark color="teal" flat value="search">
        <span>Descubrir</span>
        <v-icon>search</v-icon>
      </v-btn>
      </router-link>
      <router-link tag="li" to="/profile">
      <v-btn color="teal" flat value="favorite">
        <span>Favoritos</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      </router-link>
      <router-link tag="li" to="/profile">
      <v-btn color="teal" flat value="person">
        <span>Cuenta</span>
        <v-icon>person</v-icon>
      </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // bottomNav: '3'
    };
  }
};
</script>

<style scoped>
.v-item-group {
  position: fixed !important;
}
li {
  list-style: none;
  max-width: 150px;
  width: 100%;
}
</style>
