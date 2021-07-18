<template>
    <div class="center">
        <p class="header">My Music</p>

        <div v-if="albumCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Albums</p>
                <div v-for="collection in albumCollections" :key="collection.id">
                    <song-collection-list-item :songCollection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>

        <div v-if="epCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Extended Plays (EPs)</p>
                <div v-for="collection in epCollections" :key="collection.id">
                    <song-collection-list-item :songCollection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>
        
        <div v-if="singleCollectionsArePresent">
            <div class="dark-blob">
                <p class="category-type">Singles</p>
                <div v-for="collection in singleCollections" :key="collection.id">
                    <song-collection-list-item :songCollection="collection"></song-collection-list-item>
                </div>
            </div>
        </div>

        <div v-if="miscSongsArePresent">
            <div class="dark-blob">
                <p class="category-type">Miscellaneous</p>
                <div v-for="song in miscSongs" :key="song.id">
                    <song-list-item :song="song"></song-list-item>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { SongCollections } from './tempdata/songCollections';
import { Songs } from './tempdata/songs';
import { SongRelationships } from './tempdata/songRelationships';
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
            songs: Songs,
            songRelationships: SongRelationships,
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
            return this.albumCollections.length > 0;
        },
        epCollections() {
            return this.songCollections.filter(collection => collection.type === "ep");
        },
        epCollectionsArePresent() {
            return this.epCollections.length > 0;
        },
        singleCollections() {
            return this.songCollections.filter(collection => collection.type === "single");
        },
        singleCollectionsArePresent() {
            return this.singleCollections.length > 0;
        },
        miscSongsArePresent() {
            return this.miscSongs.length > 0;
        },
        miscSongs() {
            return this.songs.filter(song => 
                this.songRelationships.find(relationship => relationship.songId == song.id) === undefined
            );
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