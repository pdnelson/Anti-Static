<template>
    <div class="song-item">
        <div class="song-heading">
            <div class="song-name">
                <div v-if="collectionIsAlbumOrEp">
                    {{song.trackNumber}}. 
                    {{song.name}}
                </div>
                <div v-else-if="collectionIsSingle">
                    {{getTrackSide(song.trackNumber)}}.
                    {{song.name}}
                </div>
                <div v-else>
                    {{song.name}}
                </div>
            </div>
            <div class="song-year">{{song.dateRecorded}}</div>
        </div>

        <div class="hidden-content">
        </div>
    </div>
</template>

<script>
import { SongCollections } from './tempdata/songCollections';

export default {

    data() {
        return {
            songCollections: SongCollections
        };
    },
    props: {
        song: {
            type: Object
        }
    },
    methods: {
        getTrackSide: function(trackNumber) {
            if(trackNumber === 1) return "A";
            else {
                return "B";
            }
        }
    },
    computed: {
        songCollectionType() {
            if(this.$route.params.id === null || this.$route.params.id === undefined) {
                return 'misc';
            }

            let type = this.songCollections.find(collection => 
                collection.id == this.$route.params.id
            ).type

            return type;
        },

        collectionIsSingle() {
            return this.songCollectionType === "single";
        },

        collectionIsAlbumOrEp() {
            let type = this.songCollectionType;

            return type === "ep" || type === "album";
        }
    }
};
</script>

<style scoped>
    .song-item {
        margin: auto;
        width: 90%;
        padding: 20px;
        border-radius: 25px;
        border: 1px solid white;
        margin-bottom: 10px;
        cursor: pointer;
        transition: box-shadow 0.2s linear;
        transition: background-color 0.2s linear;
        color: white;
    }

    .song-item:hover {
        box-shadow: 0px 0px 8px black;
        background-color: grey;
    }

    .song-name {
        float: left;
        vertical-align: middle;
        line-height: 5px;
        opacity: 1;
    }

    .song-year {
        float: right;
        vertical-align: middle;
        line-height: 5px;
        opacity: 1;
    }

    .hidden-content {
        display: none;
    }

    @media screen and (max-width: 620px) {
        .song-heading {
            font-size: 10pt;
            width: 100%;
        }

        .song-item {
            width: 100%;
        }

        .song-name {
            font-size: 9pt;
        }

        .song-year {
            font-size: 9pt;
        }
    }
</style>