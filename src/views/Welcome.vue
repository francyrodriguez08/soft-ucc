<template>
    <div id="Home">
         <div class="top">
             <div class="wrapper">
                <img class="logo" src="../assets/iconE.svg">
                <div class="title">Bienvenido a Experience</div>
                <div class="subheading">Es un buen día para descubrir</div>
             </div>
         </div>
         <div class="bottom">
             
            <div class="button primary"  @click="redirect">Registrarse</div>
            <router-link tag="li" to="/ingresar">
            <div class="button secundary">Iniciar sesión</div>
            </router-link>
         </div>
    </div>
</template>

<script>
export default {
    methods:{
        redirect(){
            this.$router.push('/register');
        }
    }
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
li {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
}
.logo{
    width: 100px;
    margin: 0 auto;
}
.top{
    height: 50vh;
}
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.title{
    margin-top: 20px;
    font-size: 35px !important;
    font-weight: 300;
}
.bottom {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.button {
    max-width: 300px;
    width: 100%;
    border-radius: 30px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px;
}
.primary {
    background-color: teal;
}
.secundary {
    border: 1px solid #fff;
}
</style>
