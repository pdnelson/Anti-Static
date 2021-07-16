<template>
    <div>
        <router-link :to="{path: '/music/collection/' + songCollection.id}">
            <div class="collection-item">
                <div class="collection-name">
                    {{songCollection.name}}
                </div>

                <div class="collection-year">
                    ({{songCollection.yearCompiled}})
                </div>

                <img :src="collectionImage" class="art-img"/>
            </div>
        </router-link>
    </div>
</template>

<script>
import { Images } from '../../data/images';
import { Songs } from './tempdata/songs';

export default {
  data() {
    return {
      songs: Songs,
      images: Images
  };
  },   
  props: {
    songCollection: {
      type: Object
    }
  },
  methods: {

  },
  computed: {

      // If no collection image is found, the default image is used
      collectionImage() {
          let collectionImage = this.images.filter(image => image.objectType === "songcollection" && image.objectId === this.songCollection.id);

          if(collectionImage[0] === null || collectionImage[0] === undefined) {
              collectionImage = this.images.filter(image => image.objectType === "songcollection_NOART");
          }

          return collectionImage[0].image;
      }
  }
};
</script>

<style scoped>
    .collection-item {
        margin: auto;
        width: 90%;
        padding: 10px;
        border-radius: 25px;
        border: 1px solid white;
        margin-bottom: 10px;
        cursor: pointer;
        transition: box-shadow 0.2s linear;
        transition: background-color 0.2s linear;
        color: white;
        height: 97px;
    }

    .collection-item:hover {
        box-shadow: 0px 0px 8px black;
        background-color: grey;
    }

    .collection-name {
        float: left;
        font-size: 18pt;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 21px;
    }

    .collection-year {
        float: left;
        margin-top: 31px;
        margin-left: 5px;
        font-size: 10pt;
    }

    .collection-format {
        float: left;
    }

    .art-img {
        height: 75px;
        width: 75px;
        border-radius: 10px;
        float: right;
        margin: 0px;
    }

    @media screen and (max-width: 620px) {
        .collection-item {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
        }
    }
</style>