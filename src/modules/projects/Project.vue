<template>
    <div>
        <div v-if="projectExists">
            <p class="header">{{currentProject.name}}</p>
        </div>

        <div v-else class="doesnt-exist">
            Project {{$route.params.id}} does not exist!
        </div>
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
      return this.projects.find(project => project.id == this.$route.params.id);
    },
    projectExists() {
        return this.currentProject;
    }
  }
};
</script>

<style scoped>
    .doesnt-exist {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 15pt;
    }
</style>