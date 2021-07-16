<template>
    <div>
        {{currentCollection.name}}

        <back-to-previous-page></back-to-previous-page>

    </div>
</template>

<script>
import { SongCollections } from './tempdata/songCollections';
import { Songs } from './tempdata/songs';
import BackToPreviousPage from "../utilities/BackToPreviousPage";

export default { 
  mounted() {
    document.title = "Anti-Static - " + this.currentCollection.name;
  },
  components: {
    backToPreviousPage: BackToPreviousPage
  },
  data() {
      return {
          songs: Songs,
          songCollections: SongCollections
      };
  }, 
  computed: {
    currentCollection() {
        return this.songCollections.find(collection => collection.id == this.$route.params.id);
    }
  }
};
</script>

<style scoped>
</style>