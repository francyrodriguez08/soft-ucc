<template>
<div class="container-circles">
    <div class="circle orange">
        <v-icon>restaurant</v-icon>
    </div>
    <div class="circle gold" >
        <div prepend-icon="person_outline"></div>
        <v-icon>account_balance</v-icon>
    </div>
    <div class="circle clrGreen">
        <v-icon>terrain</v-icon>
    </div>
    <div class="circle clrBlue">
        <v-icon>hotel</v-icon>
    </div>
    <div class="circle clrPurple">
        <v-icon>local_bar</v-icon>
    </div>
</div>
</template>

<script>
export default {

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
