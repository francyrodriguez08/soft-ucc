<template>
    <!-- <v-layout>
        <v-flex xs6 sm6 offset-sm3> -->
            <div class="content-card">
            <v-card >
                <v-img
                    :src="post.img"
                    height="100px"
                ></v-img>
                <v-card-title >
                    <div class="title">{{post.name}}</div>
                </v-card-title>
                <v-card-text>
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
                </v-card-text>
            </v-card>
            </div>
        <!-- </v-flex>
    </v-layout> -->
</template>

<script>
export default {
    props:{
        post: Object
    },
    data() {
        return {
            rating: 5   
        }
    }
};
</script>

<style scoped>
.v-card__text {
  padding-top: 0;
  text-align: left;
}
.v-card__title {
  padding-bottom: 0;
  text-align: left;
}
.content-card {
    /* box-sizing: border-box;
    padding: 5px;
    max-width: 200px;
    width: 100%; */
}
.title {
    font-size: 14px !important;
}
</style>
