<template>
    <div class="back-button">
        <v-btn
            dark
            fixed
            bottom
            left
            color="black"
            @click="backTo"
            >
            Back to {{this.data.name}}&nbsp;&nbsp;<v-icon>undo</v-icon>
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
  props: {
      data: {
          type: Object
      }
  },
  methods: {
    backTo() {
      this.$router.push(this.data.url);
    }
  }
};
</script>

<style scoped>
.back-button {
    opacity: 0.5;
}
</style>