<template>
    <div>
        <div class="dark-blob">
            <div v-if="hasHeading">
                <div class="center"><h2 class="dark-item">{{pageSection.heading}}</h2></div> 
            </div>
            
            <div v-if="moreThanOneImage">

            </div>

            <div v-else>
                <div v-if="hasOneImage">
                    <img :src="getSectionImage()" class="section-img"/>
                    <br/>
                </div>
            </div>
            <div class="section-description" ref="description">
            </div>
        </div>
    </div>
</template>

<script>
import { Images } from '../../data/images';

export default {
  mounted() {
    // We must process the description this way to allow easier use of HTML styling in the blob sections...
    this.$refs.description.innerHTML = this.pageSection.description;
  },
  props: {
    pageSection: {
      type: Object
    }
  },
  data() {
      return {
          images: Images
      };
  },   
  methods: {
    getSectionImage: function() {
        return this.pageSectionImages[0].image;
    }
  },
  computed: {
    pageSectionImages() {
        return this.images.filter(image =>
            image.objectType == 'pagesection' &&
            image.objectId == this.pageSection.id
        )
    },
    moreThanOneImage() {
        return this.pageSectionImages.length > 1;
    },
    hasOneImage() {
        return this.pageSectionImages.length == 1;
    },
    hasHeading() {
        return (this.pageSection.heading != null && this.pageSection.heading != '')
    }
  }
};
</script>

<style scoped>
    .section-img {
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-height: 700px;
        width: 60%;
    }
</style>