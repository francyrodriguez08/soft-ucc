<template>
    <div class="profileInfo">
        <div class="content-avatar text-xs-left">
            <div class="display-1">Pedro Perez</div>
            <div><span><b>120 </b>Seguidores </span> <span><b>120 </b>Siguiendo</span></div>
            <v-btn outline color="blue-grey" class="ma-0 my-2" round small>Editar perfil</v-btn>
        </div>
            <v-avatar class="avatar" size="80px">
                <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John" >
            </v-avatar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content-avatar{
    /* margin: 16px;s */
}
.profileInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 5px;
}
.avatar {
    margin: 0 20px 0 20px;
}
.email {
    letter-spacing: .5px !important;
}
</style>
