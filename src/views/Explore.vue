<template>
    <div class="explorar">
        <v-toolbar dark color="teal">
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>
        <div>
            <gmap-map :center="center" :zoom="15" style="width: 100%; height: 557px">
                <gmap-marker v-for="(item, index) in markers" :key="index" :position="getPosition(item)"/>
            </gmap-map>
        </div>
        <!-- <h1>Explorar</h1>
         <router-link to="/profile">eeeeeeeeeeee</router-link> -->
    </div>
</template>

<script>
export default {
  name: "Explore",
  data() {
    return {
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
    }
  }
};
</script>

<style scoped>

</style>
