<template>
    <div class="back-button">
        <v-btn
            fab
            dark
            fixed
            bottom
            left
            color="black"
            @click="backTo"
            >
            <v-icon>undo</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
  data() {
    return {
      prevRoute: null
    }
  },
  methods: {
    backTo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>