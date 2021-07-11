<template>
    <div>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="black"
            @click="toTop"
            >
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
</style>