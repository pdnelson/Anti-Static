<template>
    <div class="center">
        <p class="header">My Music</p>

        <div v-if="albumCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Albums</p>
                <div v-for="collection in albumCollections" :key="collection.id">
                    <song-collection-list-item :collection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>

        <div v-if="epCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Extended Plays (EPs)</p>
                <div v-for="collection in epCollections" :key="collection.id">
                    <song-collection-list-item :collection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>
        
        <div v-if="singleCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Singles</p>
                <div v-for="collection in singleCollections" :key="collection.id">
                    <song-collection-list-item :collection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>

        <div v-if="miscSongsArePresent">
            <div class="dark-blob">
                <p class="category-type">Miscellaneous</p>
                <div v-for="song in miscSongs" :key="song.id">
                    <song-list-item></song-list-item>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { SongCollections } from './tempdata/songCollections';
import { Songs } from './tempdata/songs';
import SongCollectionListItem from './SongCollectionListItem';
import SongListItem from './SongListItem';

export default {
    components: {
        songCollectionListItem: SongCollectionListItem,
        songListItem: SongListItem
    },
    data() {
        return {
            songCollections: SongCollections,
            songs: Songs
        };
    },
    methods: {
        expandCategories: function() {
            this.mobileCategoriesExpanded = !this.mobileCategoriesExpanded;
            if(this.mobileCategoriesExpanded) this.showOrHide = "Hide";
            else this.showOrHide = "Show";
        }
    },
    computed: {
        albumCollections() {
            return this.songCollections.filter(collection => collection.type === "album");
        },
        albumCollectionsArePresent() {
            return this.songCollections.filter(collection => collection.type === "album").length > 0;
        },
        epCollections() {
            return this.songCollections.filter(collection => collection.type === "ep");
        },
        epCollectionsArePresent() {
            return this.songCollections.filter(collection => collection.type === "ep").length > 0;
        },
        singleCollections() {
            return this.songCollections.filter(collection => collection.type === "single");
        },
        singleCollectionsArePresent() {
            return this.songCollections.filter(collection => collection.type === "single").length > 0;
        },
        miscSongsArePresent() {
            return this.songs.filter(song => song.collectionId === 0).length > 0;
        },
        miscSongs() {
            return this.songs.filter(song => song.collectionId === 0);
        }
    }
};
</script>

<style scoped>
.category-type {
      font-size: 20pt;
      text-align: center;
}
</style>