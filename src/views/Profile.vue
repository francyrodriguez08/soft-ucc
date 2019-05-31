<template>
    <div class="profile">
        <v-toolbar dark fixed color="teal">
            <v-toolbar-title class="white--text">Mi perfil</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon @click="redirect('/ingresar')">power_settings_new</v-icon>
        </v-toolbar>
        <ProfileInformation />
        <!-- <Followers /> -->
        <Post  />
        <Menu />
            <v-btn
              fixed
              dark
              fab
              bottom=""
              right
              color="orange"
              class="btn-float"
              @click="redirect('/addPost')"
            >
              <v-icon >add</v-icon>
            </v-btn>
    </div>
</template>

<script>
import Menu from './../components/Menu'
import Followers from './../components/Followers'
import Post from './../components/Post'
import ProfileInformation from './../components/ProfileInformation'

export default {
     methods: {
        redirect(ruta) {
        this.$router.push(ruta);
        }
     },
    components: {
        Menu,
        Followers,
        Post,
        ProfileInformation
    }
}
</script>

<style scoped>
.profile {
    margin-top: 80px;
    margin-bottom: 60px;
    position: relative;
}
.btn-float {
    bottom: 70px;
}
</style>