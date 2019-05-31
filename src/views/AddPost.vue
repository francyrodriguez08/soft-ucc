<template>
    <div class="add-post">
        <v-toolbar dark fixed color="teal">
            <v-icon  @click="redirect('Profile')">arrow_back</v-icon>
            <v-toolbar-title class="white--text">Nueva experiencia</v-toolbar-title>
            <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>send</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container class="content">
            <v-layout row wrap>
                <v-flex xs2>
                    <v-avatar size="50px">
                        <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John" >
                    </v-avatar> 
                </v-flex>
                <v-flex xs10 class=" px-2">
                    <!-- <div class=" layout ">
                        <div class="subheading font-weight-medium">Pepito perez</div>
                        <v-spacer></v-spacer>
                        <div class="grey--text">5:30 PM</div>
                    </div> -->
                    <v-textarea
                        v-model="title"
                        label="Escribe tu experiencia..."
                        counter
                        maxlength="120"
                        full-width
                        single-line
                    ></v-textarea>        
                    <!-- <img class="imgPost" src="../assets/post.jpg" alt=""> -->
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    methods: {
        redirect(ruta) {
        this.$router.push(ruta);
        }
     },
}
</script>

<style scoped>
.content{
    margin-top: 60px;
}
</style>
