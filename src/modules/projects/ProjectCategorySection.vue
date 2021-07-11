<template>
    <div v-if="categoryHasProjects">
      <div :id="getIdFromAnchor(category.anchor)" class="anchored">
          <div class="dark-blob">
              <div class="center"><img :src="getImageFromUrl()" class="proj-category-section-img"></div>

              <h2 class="proj-category-section">{{category.name}}</h2>

              <div v-for="project in projectsInCategory" :key="project.id">
                  <project-list-item :project="project"></project-list-item>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import { Projects } from './tempdata/projects';
import ProjectListItem from './ProjectListItem';

export default {
  components: {
      projectListItem: ProjectListItem
  },
  data() {
      return {
          projects: Projects,
      };
  },
  props: {
    category: {
      type: Object
    }
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
    projectsInCategory() {
      return this.projects.filter(project => project.categoryId == this.category.id);
    },
    categoryHasProjects() {
      if (this.projectsInCategory.length > 0) return true;
      return false;
    }
  }
};
</script>

<style scoped>
.anchored {
	scroll-margin-top: 1em;	
}

.proj-category-section-img {
	width: auto;
	height: 80px;
}

.proj-category-section {
	text-align: center;
	text-decoration: underline;
  margin-bottom: 20px;
}
</style>