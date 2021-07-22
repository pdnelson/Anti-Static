<template>
  <div>
      <div v-if="collectionExists">
        <p class="header">{{currentCollection.name}}</p>

        <div class="dark-blob collection-container">

          <div v-if="hasArt">
            <img :src="collectionArt.image" class="collection-art"/>
          </div>
          
          <div class="collection-info">
            Year: {{currentCollection.yearCompiled}}<br/>
            Format: {{currentCollection.format}}<br/>
            Type: {{getType}}<br/>
            Length: {{getLength}}<br/>
            Number of Tracks: {{getTrackCount}}
          </div>
        </div>

        <div v-if="hasDescription">
          <div class="dark-blob">
            <h2 class="description-heading">Description</h2>
            {{currentCollection.description}}
          </div>
        </div>

        <div class="dark-blob">
            <h2 class="description-heading">Track Listing</h2>
            <div v-if="collectionHasSongs">
              <div v-for="song in songsInCollection" :key="song.id">
                  <song-list-item :song="song"></song-list-item>
              </div>
            </div>
            <div v-else class="center">
              This collection has no songs yet!
            </div>
        </div>
      </div>

      <div v-else class="doesnt-exist">
        Song collection {{$route.params.id}} does not exist!
      </div>

      <back-to-previous-page></back-to-previous-page>
  </div>
</template>

<script>
import { SongCollections } from './tempdata/songCollections';
import { Songs } from './tempdata/songs';
import { SongRelationships } from './tempdata/songRelationships';
import { Images } from '../../data/images';
import BackToPreviousPage from "../utilities/BackToPreviousPage";
import SongListItem from './SongListItem';

export default { 
  mounted() {
    document.title = "Anti-Static - " + this.currentCollection.name;
  },
  components: {
    backToPreviousPage: BackToPreviousPage,
    songListItem: SongListItem
  },
  data() {
      return {
          songs: Songs,
          songCollections: SongCollections,
          songRelationships: SongRelationships,
          images: Images
      };
  }, 
  computed: {
    collectionExists() {
      let collection = this.currentCollection;

      return collection !== null && collection !== undefined;
    },
    currentCollection() {
      return this.songCollections.find(collection => collection.id == this.$route.params.id);
    },
    collectionHasSongs() {
      return this.getTrackCount > 0;
    },
    hasArt() {
      return this.collectionArt !== undefined;
    },
    collectionArt() {
      return this.images.find(
        image => image.objectType === "songcollection" && 
        image.objectId === this.currentCollection.id
      );
    },
    getTrackCount() {
      let trackNum = this.songRelationships.filter(relationship => relationship.collectionId === this.currentCollection.id).length;

      if (trackNum == null || trackNum == undefined) {
        trackNum = 0;
      }

      return trackNum;
    },
    getType() {
      let collection = this.currentCollection;

      if(collection.type === "ep") {
        return "EP (Extended Play)";
      }
      else if(collection.type === "album") {
        return "Album";
      }
      else {
        return "Single";
      }
    },
    getLength() {
      return "??:?? (coming soon)"
    },
    songsInCollection() {
      if(this.songs !== null && this.songs !== undefined) {
        let relationships = this.songRelationships.filter(relationship => relationship.collectionId === this.currentCollection.id);
        let songs = []

        relationships.forEach(relationship =>
            songs.push(this.songs.find(song => song.id === relationship.songId))
        );

        return songs.sort((a, b) => (a.trackNumber > b.trackNumber) ? 1 : -1);
      }
      else return [];
    },
    hasDescription() {
      return (
        this.currentCollection.description !== null && 
        this.currentCollection.description !== undefined && 
        this.currentCollection.description !== ""
      );
    }
  }
};
</script>

<style scoped>
  .collection-art {
    height: 200px;
    width: 200px;
    float: right;
    border-radius: 10px;
  }

  .collection-container {
    min-height: 240px;
  }

  .collection-info {
    margin-top: 40px;
    margin-left: 20px;
  }

  .description-heading {
      text-align: center;
      margin-bottom: 15px;
  }

  .doesnt-exist {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 15pt;
  }

  @media screen and (max-width: 620px) {
  .collection-art {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    width: 300px;
  }
}
</style>