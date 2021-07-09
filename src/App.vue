<template>
  <v-app>
    <NavigationBar/>

    <router-view></router-view>
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
