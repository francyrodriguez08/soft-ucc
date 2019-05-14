<template>
  <div class="explore">
    <v-toolbar dark color="teal">
        <v-toolbar-title class="white--text">Explorar</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid grid-list-sm>
        <v-text-field placeholder="Buscar" prepend-icon="search" color="teal"></v-text-field>
        <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
            <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
        </v-layout>
    </v-container>
    <Menu />
  </div>
</template>

<script>
import Menu from './../components/Menu'

export default {
    components: {
        Menu
    },
}
</script>

<style>

</style>
