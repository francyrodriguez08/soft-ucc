<template>
    <div id="Home">
        <v-container fluid>
            <v-layout align-center justify-center column>
                <v-flex xs12 sm12>
                    <img class="logo" src="../assets/iconE.svg">
                </v-flex>
                
                
                <v-flex xs12 sm12>
                    <div class="title">Bienvenido a Experience</div>
                <div class="subheading">Es un buen día para descubrir</div>
                </v-flex>
                <v-btn round block color="success">Block Button</v-btn>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Home{
    background-image: url("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: fixed;
    color: white;
}
.logo{
    width: 100px;
}
</style>
