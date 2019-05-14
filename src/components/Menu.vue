<template>
  <v-card flat>
    <!-- <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div> -->
    <v-bottom-nav :active.sync="activeBtn" 
      :value="true" absolute shift>
      <router-link tag="li" to="/Experiences">
        <v-btn color="teal" flat value="Experiences">
          <span>Inicio</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/Explore">
      <v-btn dark color="teal" flat value="Explore">
        <span>Explorar</span>
        <v-icon>search</v-icon>
      </v-btn>
      </router-link>
      <router-link tag="li" to="/Favorite">
      <v-btn color="teal" flat value="Favorite">
        <span>Favoritos</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      </router-link>
      <router-link tag="li" to="/Profile">
      <v-btn color="teal" flat value="Profile">
        <span>Mi Perfil</span>
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
      activeBtn: 'Experiences'
    };
  },
    created() {
    this.activeBtn = this.$route.name
  },
  
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
