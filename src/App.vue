<template>
  <v-app>
    <NavigationBar/>

    <router-view></router-view>
    
    <hr class="footer"/>

    <footer>{{currentYear}} Patrick Nelson</footer>
  </v-app>
</template>

<script>
import NavigationBar from "./modules/NavigationBar";

export default {
  name: "App",

  components: {
    NavigationBar
  },

  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style>
.footer {
  margin-top: 10px;
}
footer {
  text-align: center;
	margin-bottom: 10px;
	margin-top: 10px;
}
#app {
	background-image: linear-gradient(to bottom right, #838383, #5A5A5A);
}
</style>
