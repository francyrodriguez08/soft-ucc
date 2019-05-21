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
                        <div class="grey--text">5:30 PM</div>
                    </div>
                    <p class="text-xs-left">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare at, augue eu porttitor vestibulum cras porta sapien quis.</p>
                    <img class="imgPost" src="../assets/post.jpg" alt="">
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
.post{
    /* margin-bottom: 60px; */
}
.content-avatar{
    margin: 10px;
}
.imgPost{
    width: 100%;
    border-radius: 6px;
}
</style>
