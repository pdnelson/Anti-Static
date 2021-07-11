<template>
    <div>
        {{currentProject.name}}
    </div>
</template>

<script>
import { Projects } from './tempdata/projects';

export default {
  data() {
      return {
          projects: Projects,
      };
  },
  methods: {
        getImageFromUrl: function() {
            return require('' + this.category.lightImage);
        },
        getIdFromAnchor: function(anchor) {
            return anchor.substring(1, anchor.length);
        }
  },
  computed: {
    currentProject() {
      return this.projects.find(project => project.id == this.$route.params.id)
    }
  }
};
</script>

<style scoped>
</style>