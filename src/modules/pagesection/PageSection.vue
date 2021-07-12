<template>
    <div>
        <div class="dark-blob">
            <div v-if="hasHeading">
                <h2 class="section-heading">{{pageSection.heading}}</h2>
            </div>

            <div v-if="moreThanOneImage" class="image-gallery">
                <img class="image" v-for="(image, i) in pageSectionImages" :src="image" :key="i" @click="index = i">
                <vue-gallery-slideshow :images="pageSectionImages" :index="index" @close="index=null"></vue-gallery-slideshow>
            </div>

            <div v-else>
                <div v-if="hasOneImage">
                    <img :src="getSectionImage()" class="section-img"/>
                    <br/>
                </div>
            </div>
            <p class="section-description" ref="description"></p>
        </div>
    </div>
</template>

<script>
import { Images } from '../../data/images';
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  components: {
    vueGallerySlideshow: VueGallerySlideshow,
  },
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
          images: Images,
          index: null
      };
  },   
  methods: {
    getSectionImage: function() {
        return this.pageSectionImages[0];
    }
  },
  computed: {
    pageSectionImages() {
        return this.images.filter(image =>
            image.objectType == 'pagesection' &&
            image.objectId == this.pageSection.id
        )
        .map(image => image.image)
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
    .section-heading {
        text-align: center;
        margin-bottom: 15px;
    }

    .section-img {
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-height: 700px;
        width: 60%;
        box-shadow: 3px 3px 15px 3px black;
    }

    .image-gallery {
        text-align: center;
    }

    .image {
        width: 100px;
        height: 100px;
        background-size: cover;
        cursor: pointer;
        margin: 5px;
        border-radius: 3px;
        border: 1px solid lightgray;
        object-fit: contain;
    }

    @media screen and (max-width: 620px) {
    .section-img {
      width: 100%;
    }
  }
</style>