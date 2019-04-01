<template>
    <div class="register">
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
            v-model="name"
            :rules="nameRules"
            dark
            label="Nombres"
            required
          ></v-text-field>
         <v-text-field
         class="input"
            v-model="email"
            :rules="emailRules"
            dark
            label="Correo electrónico"
            required
          ></v-text-field>
          <v-text-field dark
            class="input"
            color="white"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            hint="Al menos 8 carácteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
             <div class="button primary">Ingresar</div>
             <div class="back" @click="redirect">Ya estoy registrado</div>
         </div>
    </div>
</template>

<script>
export default {
  methods:{
      redirect(){
          this.$router.push('/');
      }
  },

  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Nombre es obligatorio"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail es obligatorio",
        v => /.+@.+/.test(v) || "E-mail no valido"
      ],
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Contraseña es obligatoria',
        min: v => v.length >= 8 || 'Min 8 carácteres',
        emailMatch: () => ('El correo electrónico y la contraseña que ingresaste no coinciden')
      }
    };
  }
};
</script>

<style scoped>
.register {
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
  height: 60%;
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
.back{
  margin-top: 10px;
}
</style>

