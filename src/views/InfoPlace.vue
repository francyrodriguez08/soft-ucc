<template>
    <div class="info">
        <v-toolbar dark color="teal">   
            <v-icon  @click="redirect('Experiences')">arrow_back</v-icon>        
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <gmap-map :center="center" :zoom="15" style="width: 100%; height: 40vh">
            <gmap-marker v-for="(item, index) in markers" :key="index" :position="getPosition(item)"/>
        </gmap-map>
        <div class="container">
        <swiper :options="swiperOption">
        <swiper-slide>         
                <div class="color"><img src="https://picsum.photos/id/10/400" alt=""></div>           
            </swiper-slide>
        <swiper-slide>           
                <div class="color"><img src="https://picsum.photos/id/10/400" alt=""></div>           
            </swiper-slide>
        <swiper-slide >           
                <div class="color"><img src="https://picsum.photos/id/10/400" alt=""></div>           
            </swiper-slide>
        <swiper-slide >           
                <div class="color"><img src="https://picsum.photos/id/10/400" alt=""></div>          
            </swiper-slide>
      </swiper>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.geolocate();
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
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
  methods: {
      redirect(ruta) {
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
  width: 72vw;
  height: 150px;
  background-color: teal;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.swiper-slide {
  width: 76%;
}
.container {
  box-sizing: border-box;
  padding: 10px;
}
</style>
