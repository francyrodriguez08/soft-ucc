<template>
    <div class="experiences">
        <v-toolbar dark color="teal">
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <div class="inputPlace">
            <v-text-field placeholder="¿A donde quieres ir?" prepend-inner-icon="search" color="teal" ></v-text-field>
            <v-icon @click="redirect('/maps')">place</v-icon>
          </div>
            <Categorys />
          <div class="wrapper">
              <Card @click.native="redirect(`/infoPlace/${item.id}`)" v-for="item in cards" :key="item.id" :post="item" />
          </div>
        </v-container>

        <div>
            <gmap-map :center="center" :zoom="15" style="width: 100%; height: 557px">
                <gmap-marker v-for="(item, index) in markers" :key="index" :position="getPosition(item)"/>
            </gmap-map>
        </div>
        <Menu />

        <!-- <h1>Explorar</h1>
         <router-link to="/profile">eeeeeeeeeeee</router-link> -->
    </div>
</template>

<script>
import Menu from "./../components/Menu";
import Card from "./../components/card";
import Categorys from "./../components/categorys";

export default {
  name: "Experiences",
  data() {
    return {
      cards: [
        {
          name: "Parque 1",
          id: 1,
          stars: 4,
          img: "https://picsum.photos/id/10/200/300"
        },
        {
          name: "Parque 2",
          id: 2,
          stars: 4,
          img: "https://picsum.photos/id/11/200/300"
        },
        {
          name: "Parque 3",
          id: 3,
          stars: 4,
          img: "https://picsum.photos/id/12/200/300"
        },
        {
          name: "Parque 4",
          id: 4,
          stars: 4,
          img: "https://picsum.photos/id/13/200/300"
        },
        {
          name: "Parque 5",
          id: 5,
          stars: 4,
          img: "https://picsum.photos/id/14/200/300"
        },
        {
          name: "Parque 6",
          id: 6,
          stars: 4,
          img: "https://picsum.photos/id/15/200/300"
        }
      ],
      center: { lat: 4.1168257, lng: -73.6089986 },
      markers: [
        {
          nombre: "UCC",
          lat: 4.1168257,
          lng: -73.6089986
        }
      ],
      places: [],
      currentPlace: null
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlance = place;
    },
    getPosition(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    },
    addMarker() {
      const marker = {
        nombre: "Parque de la vida",
        lat: 4.1466671,
        lng: -73.6225355
      };
      this.markers.push(marker);
      this.center = marker;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        },
        error => {
          console.log("Error>", error);
        }
      );
    },
    redirect(ruta){
        this.$router.push(ruta);
    }
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
</style>
