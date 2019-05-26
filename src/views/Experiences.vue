<template>
<div class="experiences">
  <!-- <v-toolbar dark color="teal">   
              <v-icon v-if="route" @click="redirect('Experiences')">arrow_back</v-icon>        
            <v-toolbar-title class="white--text">Experiencias</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar> -->
      <router-view></router-view>
</div>
</template>
<script>
export default {
    created() {
    if (this.$route.path == '/experiences') {
      this.route = false    
    }else {
      this.route = true
    }
},
data() {
  return {
    route: false
  }
},
  methods: {
    redirect(ruta) {
      this.$router.go(-1);
    }
  }
};
</script>

