<template>
    <div>
        <div v-if="projectExists">
            <p class="header">{{currentProject.name}}</p>
            <div class="dark-blob">
                <div v-if="moreThanOneImage">

                </div>

                <div v-else>
                    <div v-if="hasOneImage">
                        <img :src="getProjectImage()" class="proj-img"/>
                        <br/>
                    </div>
                </div>
                <div class="proj-description" ref="description">
                </div>
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

export default {
  mounted() {
    // We must process the description this way to allow easier use of HTML styling in the blob sections...
    this.$refs.description.innerHTML = this.currentProject.description;
  },
  data() {
      return {
          projects: Projects,
          images: Images
      };
  },   
  methods: {
    getProjectImage: function() {
        return this.projectImages[0].image;
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