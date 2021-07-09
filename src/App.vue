<template>
  <v-app>
    <NavigationBar/>

    <router-view></router-view>

    <footer>2021 Patrick Nelson</footer>
  </v-app>
</template>

<script>
import NavigationBar from "./modules/NavigationBar";

export default {
  name: "App",
  components: {
    NavigationBar
  }
};
</script>

<style scoped>

</style>
