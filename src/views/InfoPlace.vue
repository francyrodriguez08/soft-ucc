<template>
    <div class="info">
        <v-toolbar dark color="teal">   
            <v-icon  @click="redirect('Experiences')">arrow_back</v-icon>        
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <gmap-map ref="myMap" :center="getCoords()" :zoom="15" style="width: 100%; height: 40vh">
            <gmap-marker v-for="(item, index) in getMarkers()" :key="index" :position="getPosition(item)"/>
        </gmap-map>
        <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in getPhotos()" :key="index">
                    <div class="color"><img :src="item.getUrl()" alt=""></div>           
                </swiper-slide>
            </swiper>
            <div class="text-xs-left mt-3">
                <div class="title">{{ getName() }}</div>
                <v-rating 
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$vuetify.icons.ratingFull"
                  half-increments
                  hover
                  size="18"
                  dense
                ></v-rating>
            </div>
            <div>
                <p class="text-xs-left mt-2">
                    {{ getOpeningHours() }}
                </p>
                <div class="text-xs-left">
                    <v-icon>place</v-icon><span class="subheading">{{ getAddress() }}</span>
                </div>
                <div class="text-xs-left">
                    <v-icon>schedule</v-icon><span class="subheading">Horario</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    let _this = this;
    this.geolocate();
    setTimeout(() => {
      _this.rating = this.getRating();
    }, 500);
  },
  data() {
    return {
      siteName: 'Mon',
      rating: 0,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      places: [],
      currentPlace: null
    };
  },
  methods: {
    getMarkers(){
      return [
        {
          nombre: this.getName(),
          lat: this.getCoords().lat,
          lng: this.getCoords().lng
        }
      ];
    },
    getCenter(){
      return { lat: 4.1168257, lng: -73.6089986 };
    },
    getRating(){
      let item = this.getItemResult(this.$route.params.id);
      return item[0].rating;
    },
    getCoords(){
      let item = this.getItemResult(this.$route.params.id);
      return {
        lat: item[0].geometry.location.lat(),
        lng: item[0].geometry.location.lng(),
      };
    },
    getPhotos(){
      let item = this.getItemResult(this.$route.params.id);
      return item[0].photos;
    },
    getAddress(){
      let item = this.getItemResult(this.$route.params.id);
      return item[0].formatted_address;
    },
    getName(){
      let item = this.getItemResult(this.$route.params.id);
      return item[0].name;
    },
    getOpeningHours(){
      let item = this.getItemResult(this.$route.params.id);
      return item[0].opening_hours.open_now == true ? "Abierto: Sí" : "Abierto: No";
    },
    getItemResult (id) {
      return this.$store.state.results.filter(item => item.id == id);
    },
    redirect() {
      this.$router.go(-1);
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
.color {
  border-radius: 4px;
  /* width: 72vw; */
  height: 150px;
  background-color: teal;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

/* .swiper-slide {
  width: 76%;
} */
.container {
  box-sizing: border-box;
  padding: 15px;
}
</style>
