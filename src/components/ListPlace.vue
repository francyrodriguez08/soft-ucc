<template>
    <div class="experiences">
      <v-toolbar dark color="teal">   
              <!-- <v-icon  @click="redirect('Experiences')">arrow_back</v-icon>         -->
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <div class="inputPlace">
            <v-text-field placeholder="¿A donde quieres ir?" v-model="search" prepend-inner-icon="search" color="teal" ></v-text-field>
            <!-- <router-link to="/maps"></router-link> -->
            <v-icon @click="searchFromText()">send</v-icon>
          </div>
          <Categorys />
          <div class="wrapper">
            <router-link tag="li" :to="`Experiences/infoPlace/${item.id}`" v-for="item in cards" :key="item.id">
              <Card :post="item" :stars="item.stars" />
            </router-link>
          </div>
          <gmap-map :center="{}" ref="myMap"></gmap-map>
        </v-container>
        <v-btn
              fixed
              dark
              fab
              bottom=""
              right
              color="teal"
              class="btn-float"
              @click="redirect('/maps')"
            >
              <v-icon>place</v-icon>
            </v-btn>
        <Menu />
    </div>
</template>

<script>
import Menu from "./../components/Menu";
import Card from "./../components/card";
import Categorys from "./../components/categorys";

export default {
  data() {
    return {
      route:'',
      cards: [

      ],
      search:''
    };
  },
  mounted() {
    let _this = this;
    setTimeout(function(){
      _this.searchCategory('restaurante');
    }, 1000);
  },
  computed: {
    category() {
      if (this.$store.state.category) {
        return this.$store.state.category;
      }
    }
  },
  watch: {
    category(value) {
      this.searchCategory(value);
    }
  },
  methods: {
    redirect(ruta) {
      this.$router.push(ruta);
    },
    searchFromText(){
      this.searchCategory(this.search);
    },
    searchCategory(text) {
        const villavo = new google.maps.LatLng(4.133999, -73.625197);
        const request = {
          location: villavo,
          query: text,
          fields: ["name", "geometry"]
        };
        const service = new google.maps.places.PlacesService(
          this.$refs.myMap.$mapObject
        );
        this.cards = [];
        let myCards = this.cards;
        let _this = this;
        service.textSearch(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            _this.$store.dispatch('setResults', results);
            for (var i = 0; i < results.length; i++) {
              // console.log(results[i]);
              let item = { 
                'id': results[i].id, 
                'name': results[i].name,
                'stars': results[i].rating,
                'img': results[i].photos ? results[i].photos[0].getUrl() : ''
              };
              myCards.push(item);
            }
          }
        });
      },
  },
  components: {
    Menu,
    Card,
    Categorys
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
}
.inputPlace{
  display: flex;
}
li {
  list-style: none;
}
.btn-float {
    bottom: 70px;
}
</style>
