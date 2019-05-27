<template>
<div class="container-circles">
    <div class="circle orange" @click="setCategory('restaurante')">
        <v-icon>restaurant</v-icon>
    </div>
    <div class="circle gold" @click="setCategory('museo')" >
        <div prepend-icon="person_outline"></div>
        <v-icon>account_balance</v-icon>
    </div>
    <div class="circle clrGreen" @click="setCategory('senderismo')">
        <v-icon>terrain</v-icon>
    </div>
    <div class="circle clrBlue" @click="setCategory('hotel')">
        <v-icon>hotel</v-icon>
    </div>
    <div class="circle clrPurple" @click="setCategory('bar')">
        <v-icon>local_bar</v-icon>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        setCategory(value) {
            console.log(value)
            this.$store.commit("SET_CATEGORY", value);
        },
        searchCategory(text){
            const villavo = new google.maps.LatLng(4.133999, -73.625197);
            const request = {
            location: villavo,
            query: text,
            fields: ['name', 'geometry']
            };
            const service = new google.maps.places.PlacesService(this.$refs.myMap.$mapObject);
            service.textSearch(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            }
            }
            });
        }
    }
}
</script>

<style scoped>
.circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* background-color: blueviolet; */
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.container-circles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.gold{
    background-color: #ffc107;
}
.clrBlue{
    background-color: #03a9f4;
}
.clrPurple{
    background-color: #ab47bc;
}
.clrGreen{
    background-color: #4caf50;
}
</style>
