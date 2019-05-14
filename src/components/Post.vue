<template>
    <div class="post ">
        <!-- <div class="content-avatar">
            <v-avatar class="avatar" size="60px">
                <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John" >
            </v-avatar>
        </div> -->
        <v-container>
            <v-layout row wrap>
                <v-flex xs2>
                    <v-avatar size="50px">
                        <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John" >
                    </v-avatar>
                </v-flex>
                <v-flex xs10 class=" px-2">
                    <div class=" layout ">
                        <div class="subheading font-weight-medium">Pepito perez</div>
                        <v-spacer></v-spacer>
                        <div class="grey--text">10/05/2019</div>
                    </div>
                    <p class="text-xs-left">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare at, augue eu porttitor vestibulum cras porta sapien quis.</p>
                    
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content-avatar{
    margin: 10px;
}
</style>
