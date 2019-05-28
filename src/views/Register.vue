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
        <v-form 
        ref="form"
        v-model="valid"
        lazy-validation>
         <v-text-field
         class="input"
            v-model="name"
            name="name"
            :rules="nameRules"
            dark
            label="Nombres"
            required
            prepend-icon="person_outline"
          ></v-text-field>
         <v-text-field
         class="input"
            v-model="email"
            name="email"
            :rules="emailRules"
            dark
            label="Correo electrónico"
            required
            prepend-icon="mail_outline"
          ></v-text-field>
          <v-text-field dark
            class="input"
            color="white"
            name="pass"
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            hint="Al menos 8 carácteres"
            counter
            @click:append="show1 = !show1"
            prepend-icon="lock_outline"
          ></v-text-field>
          <v-radio-group v-model="check" row>
            <v-radio label="Personal" value="personal" color="orange" dark></v-radio>
            <v-radio label="Empresa" value="empresa" color="orange" dark></v-radio>
          </v-radio-group>
          <v-btn class="button primary" @click="validate" color="teal">Ingresar</v-btn>
          <div class="back" @click="redirect('/soft-ucc')">Ya estoy registrado</div>
         </v-form>
         </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: true,
      errorMessage: "",
      successMessage: "",
      name: "",
      nameRules: [v => !!v || "Nombre es obligatorio"],
      email: "",
      emailRules: [
        v => !!v || "E-mail es obligatorio",
        v => /.+@.+/.test(v) || "E-mail no valido"
      ],
      show1: false,
      password: "",
      rules: {
        required: value => !!value || "Contraseña es obligatoria",
        min: v => v.length >= 8 || "Min 8 carácteres",
        emailMatch: () =>
          "El correo electrónico y la contraseña que ingresaste no coinciden"
      },
      check: ""
    };
  },
  methods: {
    redirect(ruta) {
      this.$router.push(ruta);
    },
    validate() {
      // console.log(new FormData(this.$refs.form.$el))
      if (this.$refs.form.validate()) {
        this.registerPerfil(this.$refs.form.$el)
      } else {
        console.log('no entro')
      }

      // if (this.$refs.form.validate()) {
      //   this.snackbar = true;
      // } else {
      //   const Toast = Swal.mixin({
      //     toast: true,
      //     position: "top-end",
      //     showConfirmButton: false,
      //     timer: 3000
      //   });
      //   Toast.fire({
      //     type: "error",
      //     title: "Llenar todos los campos"
      //   });
      // }
    },
    setMessages(res) {
      if (res.data.error) {
        this.errorMessage = res.data.message;
      } else {
        this.successMessage = res.data.message;
      }
      setTimeout(() => {
        this.errorMessage = false;
        this.successMessage = false;
      }, 2000);
    },
    // registerPerfil(e) {
    //   axios
    //     .post(
    //       "http://localhost/soft-ucc/src/api.php?action=create",
    //       new FormData(e.target)
    //     )
    //     .then(res => {
    //       console.log(new FormData(e.target))
    //       this.setMessages(res);
    //       const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 3000
    //       });
    //       Toast.fire({
    //         type: "success",
    //         title: "Pefil creado exitosamente"
    //       });
    //       this.reset();
    //     });
    // }
    registerPerfil(e) {
      axios
        .post(
          "http://localhost/soft-ucc/src/api.php?action=create",
          new FormData(e)
        )
        .then(res => {
          if (!res.data.error) {
            this.redirect('/experiences')
          }else {
            console.log('No se registro')
          }
        });
    }
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
  height: 42vh;
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
  /* margin-top: 20px; */
}
.primary {
  background-color: teal;
  cursor: pointer;
  transition: all ease 0.3s;
}
.primary:hover {
  background-color: rgb(15, 119, 119);
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
.back {
  margin-top: 10px;
}
.v-input {
  flex: initial;
}
</style>

