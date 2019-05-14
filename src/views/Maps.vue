<template>
    <div>
      <v-toolbar dark color="teal">
          <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar dense floating>
        <!-- <div class="inputPlace"> -->
          <v-text-field placeholder="¿A donde quieres ir?" prepend-inner-icon="search" color="teal" ></v-text-field>
          <v-icon @click="redirect('/Maps')">place</v-icon>
        <!-- </div> -->
      </v-toolbar>
      <gmap-map :center="center" :zoom="15" style="width: 100%; height: 600px">
          <gmap-marker v-for="(item, index) in markers" :key="index" :position="getPosition(item)"/>
      </gmap-map>
      
    </div>
</template>

<script>
export default {
    name: "Maps",
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
      this.markers.push(marker);s
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
  },
}
</script>

<style>

</style>
