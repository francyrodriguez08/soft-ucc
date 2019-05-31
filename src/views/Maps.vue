<template>
    <div>
      <v-toolbar dark color="teal">
          <v-icon  @click="redirect('Experiences')">arrow_back</v-icon>
          <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
      <div class="container">
        <div class="inputPlace">
          <v-text-field placeholder="¿A donde quieres ir?" single-line prepend-inner-icon="search" color="teal" v-model="search" ></v-text-field>
          <v-icon @click="searchText()">send</v-icon>
        </div>
      <Categorys />
      </div>
      <gmap-map  ref="myMap" :center="center" :zoom="15" style="width: 100%; height: 600px" >
          <gmap-marker v-for="(item, index) in markers" :key="index" 
            :position="getPosition(item)"
            @click="openInfoWindow(item,index)"
          />
          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
          >
            <div v-html="infoContent"></div>
          </gmap-info-window>
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
      currentPlace: null,
      search: "",
      infoContent: "",
      infoWinOpen: false,
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
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
    openInfoWindow: function(marker, idx) {
      console.log(marker);
      this.infoWindowPos = {
        lat: marker.lat,
        lng: marker.lng
      };
      let photoUrl = "";
      if (marker.details.photos.length > 0) {
        photoUrl = marker.details.photos[0].getUrl();
      }
      this.infoContent = `<div>
                              <div>${marker.nombre}</div>
                              <img width='200' src='${photoUrl}' />
                            </div>`;
      this.infoWinOpen = true;
    },
    searchText() {
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
      let _this = this;
      service.textSearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            _this.addMarker(results[i]);
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
    addMarker(item) {
      const marker = {
        nombre: item.name,
        lat: item.geometry.location.lat(),
        lng: item.geometry.location.lng(),
        details: item
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
};
</script>

<style scoped>
.inputPlace{
  display: flex;
}
.container{
  padding: 0 15px;
}
</style>
