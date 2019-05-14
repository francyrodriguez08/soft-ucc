<template>
    <div class="profile">
        <v-toolbar dark color="teal">
            <v-toolbar-title class="white--text">Mi perfil</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <Followers />
        <Post />
        <Menu />
    </div>
</template>

<script>
import Menu from './../components/Menu'
import Followers from './../components/Followers'
import Post from './../components/Post'

export default {
    components: {
        Menu,
        Followers,
        Post
    }
}
</script>

<style scoped>

</style>
