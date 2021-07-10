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
  .center {
    text-align: center;
  }
  .header {
    margin-top: 20px;
    font-size: 35pt;
    text-shadow: 4px 2px 2px #545454;
    color: #242424
  }
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
  .dark-blob {
    margin: auto;
    width: 65%;
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 25px;
    background-image: linear-gradient(to top, #4D4D4D, #383838);
    color: white;
    font-family: 'IBM Plex Mono', monospace; 
    box-shadow: 10px 10px 5px grey;
  }
  @media screen and (max-width: 620px) {
    .header {
      margin-top: 15px;
      font-size: 25pt;
    }
    .dark-blob {
      width: auto;
      border-radius: 0px;
    }
  }
</style>
