<template>
    <div v-if="categoryHasProjects">
        <div v-if="desktop">
            <a :href="category.anchor">
                <div class="proj-category-container">
                    <img :src="getImageFromUrl()" :alt="category.name" class="proj-category-img">
                    <p class="proj-category-heading">{{category.name}}</p>
                </div>
            </a>
        </div>
        <div v-if="mobile">
            <a :href="category.anchor">
                <div class="proj-category-container-mobile">
                    <p class="proj-category-heading-mobile">{{category.name}}</p>
                </div>
            </a>
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
  props: {
    category: {
      type: Object
    },
    mobile: {
        type: Boolean
    },
    desktop: {
        type: Boolean
    },
    dark: {
        type: Boolean
    },
    light: {
        type: Boolean
    }
  },
  methods: {
        getImageFromUrl: function() {
            let url;
            if (this.dark != null && this.dark) url = this.category.darkImage;
            else if (this.light != null & this.light) url = this.category.lightImage;
            else url = this.category.darkImage; // Dark is the default
            return require('' + url);
        }
  },
  computed: {
    projectsInCategory() {
        var projects;

        // If the category ID is 1, i.e. 'Miscellaneous', then all projects of 
        // categoryId 0 or 1 belong to the category
        if(this.category.id == 1) {
            projects = this.projects.filter(project => 
            project.categoryId == this.category.id ||
            project.categoryId == 0);
        }
        else projects = this.projects.filter(project => project.categoryId == this.category.id);

        return projects;
    },
    categoryHasProjects() {
      return this.projectsInCategory.length > 0;
    }
  }
};
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.proj-category-container {
	width: 20%px;
	padding: 10px;
}

.proj-category-img {
	width: auto;
	height: 80px;
}

.proj-category-heading {
	color: black;
	font-family: 'IBM Plex Mono', monospace;
	font-weight: bold;
}

.proj-category-container-mobile {
    width: 20%px;
    padding-left: 30px;
    padding-top: 5px;
}

.proj-category-img-mobile {
    height: 45px;
    width: 35px;
    float: left;
    padding-top: 8px;
    margin-left: 0px;
}

.proj-category-heading-mobile {
    margin: 0px;
    font-size: 14px;
    float: left;
    color: white;
    text-decoration: underline;
}
</style>