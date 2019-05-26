<template>
    <div class="profile">
        <v-toolbar dark fixed color="teal">
            <v-toolbar-title class="white--text">Mi perfil</v-toolbar-title>
            <v-spacer></v-spacer>
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
            >
              <v-icon>add</v-icon>
            </v-btn>
    </div>
</template>

<script>
import Menu from './../components/Menu'
import Followers from './../components/Followers'
import Post from './../components/Post'
import ProfileInformation from './../components/ProfileInformation'
export default {
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