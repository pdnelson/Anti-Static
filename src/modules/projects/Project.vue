<template>
    <div>
        <div v-if="projectExists">
            <p class="header">{{currentProject.name}}</p>

            <div v-for="pageSection in pageSectionsInProject" :key="pageSection.id">
                <page-section :pageSection="pageSection"></page-section>
            </div>

        </div>

        <div v-else class="doesnt-exist">
            Project {{$route.params.id}} does not exist!
        </div>
    </div>
</template>

<script>
import { Projects } from './tempdata/projects';
import { Images } from '../../data/images';
import { PageSections } from '../../data/pageSections';
import PageSection from "../pagesection/PageSection";

export default {  
  components: {
    pageSection: PageSection
  },
  mounted() {
    // We must process the description this way to allow easier use of HTML styling in the blob sections...
    this.$refs.description.innerHTML = this.currentProject.description;
  },
  data() {
      return {
          projects: Projects,
          images: Images,
          pageSections: PageSections
      };
  },   
  methods: {
    getProjectImage: function() {
        return this.projectImages[0].image;
    }
  },
  computed: {
    currentProject() {
      return this.projects.find(project => project.id == this.$route.params.id);
    },
    projectExists() {
        return this.currentProject;
    },
    projectImages() {
        return this.images.filter(image =>
            image.objectType == 'project' &&
            image.objectId == this.currentProject.id
        )
    },
    moreThanOneImage() {
        return this.projectImages.length > 1;
    },
    hasOneImage() {
        return this.projectImages.length == 1;
    },
    pageSectionsInProject() {
        return this.pageSections.filter(pageSection => 
        pageSection.objectType == 'project' &&
        pageSection.objectId == this.$route.params.id)
        .sort((a, b) => (a.order > b.order) ? 1 : -1)
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

    .proj-img {
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-height: 800px;
        width: 60%;
    }
</style>