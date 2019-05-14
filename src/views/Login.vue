<template>
    <div class="login">
        <div class="filter"></div>
         <div class="top">
             <div class="wrapper">
                <img class="logo" src="../assets/iconE.svg">
                <div class="social-networks">
                    <img class="social-logo" src="../assets/facebook.png" alt="">
                    <img class="social-logo" src="../assets/google-plus.png" alt="">
                </div>
             </div>
         </div>
         <div class="bottom">
         <v-text-field
         class="input"
            v-model="firstname"
            :rules="emailRules"
            dark
            label="Correo electrónico"
            required
            prepend-icon="person_outline"
          ></v-text-field>
          
          <v-text-field
         class="input"
            v-model="password"
            :rules="emailRules"
            dark
            label="Contraseña"
            password
            required
            prepend-icon="mail_outline"
          ></v-text-field>
          <div class="button primary" @click="redirect('/Experiences')">Ingresar</div>
          <!-- <div class="button secundary">Iniciar sesión</div> -->
         </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      password: "",
      nameRules: [
        v => !!v || "Correo es obligatorio",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail es obligatorio",
        v => /.+@.+/.test(v) || "E-mail no valido"
      ]
    };
  },
  methods:{
      redirect(ruta){
          this.$router.push(ruta);
      }
  }
};
</script>

<style scoped>
.login {
  background-image: url("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  color: white;
}
.filter {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.22);
    z-index: -1;
    top: 0;
}
.logo {
  width: 100px;
  margin: 0 auto;
}
.top {
  height: 50vh;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.bottom {
  height: 50%;
  display: flex;
  justify-content: flex-start;
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
  margin-top: 20px;
}
.primary {
  background-color: teal;
}
.secundary {
  border: 1px solid #fff;
}
.social-networks {
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.social-logo {
  width: 50px;
}
.input {
    flex: initial !important;
    max-width: 280px;
    width: 100%;
}
.icon {
  color:#fff
}
</style>

