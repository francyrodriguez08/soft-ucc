<template>
  <div class="explore">
    <v-toolbar dark color="teal">
        <v-toolbar-title class="white--text">Explorar</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <!-- <v-container fluid grid-list-sm>
        <v-text-field placeholder="Buscar" prepend-icon="search" color="teal"></v-text-field>
        <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
            <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
        </v-layout>
    </v-container> -->
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex cardImg">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    </v-layout>
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

<style scoped>
.v-card{
    box-shadow: none !important;
}
</style>
