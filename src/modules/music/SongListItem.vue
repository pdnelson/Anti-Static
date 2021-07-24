<template>
    <div class="song-item" @click="showOrHideContent()">
        <div class="song-heading" >
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

        <div class="hidden-content" ref="hiddenContent">
            <br/>
            waffle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cofle cone<br/>
            waffle cone<br/>
            waffle cone<br/>
            waffle cone<br/>
            waffle cone<br/>
            waffle cone<br/>
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
        },
        showOrHideContent: function() {
            let item = this.$refs.hiddenContent;

            if (item.style.maxHeight){
                item.style.maxHeight = null;
            } else {
                item.style.maxHeight = item.scrollHeight + "px";
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
        padding: 18px;
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

    .song-heading {
        margin-top: 2px;
    }

    .song-name {
        line-height: 0px;
    }

    .song-year {
        float: right;
        line-height: 0px;
    }

    .hidden-content {
        max-height: 0;
        transition: max-height 0.2s ease-out;
        overflow: hidden;
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