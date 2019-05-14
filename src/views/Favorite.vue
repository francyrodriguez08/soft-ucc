<template>
    <div class="search">
        <v-toolbar dark color="teal">
            <v-toolbar-title class="white--text">Favoritos</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <Menu />
    </div>
</template>

<script>
import Menu from './../components/Menu'

export default {
    components: {
        Menu
    }
}
</script>

<style>

</style>
