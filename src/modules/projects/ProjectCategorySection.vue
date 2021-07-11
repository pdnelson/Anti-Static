<template>
    <div :id="getIdFromAnchor(category.anchor)" class="anchored">
        <div class="dark-blob">
            <div class="center"><img :src="getImageFromUrl()" class="proj-category-img-lower"></div>

            <h2 class="proj-category-heading-lower">{{category.name}}</h2>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    }
  },
  methods: {
        getImageFromUrl: function() {
            return require('' + this.category.lightImage);
        },
        getIdFromAnchor: function(anchor) {
            return anchor.substring(1, anchor.length);
        }
  }
};
</script>

<style scoped>
.anchored {
	scroll-margin-top: 1em;	
}

.proj-category-img-lower {
	width: auto;
	height: 80px;
}

.proj-category-heading-lower {
	text-align: center;
	text-decoration: underline;
}
</style>