<template>
    <div>
      <v-toolbar dark color="teal">
          <v-icon  @click="redirect('Experiences')">arrow_back</v-icon>
          <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar dense>
        <!-- <div class="inputPlace"> -->
          <v-text-field placeholder="¿A donde quieres ir?" prepend-inner-icon="search" color="teal" ></v-text-field>
          <v-icon @click="redirect('/experiences')">send</v-icon>
        <!-- </div> -->
      </v-toolbar>
      <Categorys />
      <gmap-map  ref="myMap" :center="center" :zoom="15" style="width: 100%; height: 600px" >
          <gmap-marker v-for="(item, index) in markers" :key="index" :position="getPosition(item)"/>
      </gmap-map>
      
    </div>
</template>

<script>
import Categorys from "./../components/categorys";

export default {
  name: "Maps",
  components: {
    Categorys
  },
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
    mounted() {
      this.geolocate();
    },
    methods: {
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
        service.textSearch(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              console.log(results[i]);
            }
          }
        });
      },
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
      redirect(ruta) {
        this.$router.push(ruta);
      }
    }
  }

</script>

<style scoped>
.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* background-color: blueviolet; */
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container-circles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.gold {
  background-color: #ffc107;
}
.clrBlue {
  background-color: #03a9f4;
}
.clrPurple {
  background-color: #ab47bc;
}
.clrGreen {
  background-color: #4caf50;
}
</style>
