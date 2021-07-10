<template>
    <div>
        <div v-if="desktop">
            <a :href="category.anchor">
                <div class="proj-category-container">
                    <img :src="getImageFromUrl()" :alt="category.name" class="proj-category-img">
                    <p class="proj-category-heading">{{category.name}}</p>
                </div>
            </a>
        </div>
        <div v-if="mobile">
            <a :href="category.anchor">
                <div class="proj-category-container-mobile">
                    <img :src="getImageFromUrl()" :alt="category.name" class="proj-category-img-mobile">
                    <p class="proj-category-heading-mobile">{{category.name}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    },
    mobile: {
        type: Boolean
    },
    desktop: {
        type: Boolean
    },
    dark: {
        type: Boolean
    },
    light: {
        type: Boolean
    }
  },
  methods: {
        getImageFromUrl: function() {
            let url;
            if (this.dark != null && this.dark) url = this.category.darkImage;
            else if (this.light != null & this.light) url = this.category.lightImage;
            else url = this.category.darkImage; // Dark is the default
            return require('' + url);
        }
  }
};
</script>

<style scoped>
.proj-category-container {
	width: 20%px;
	padding: 10px;
}

.proj-category-img {
	width: auto;
	height: 80px;
}

.proj-category-heading {
	color: black;
	text-decoration: underline;
}

.proj-category-container-mobile {
    width: 20%px;
    padding-left: 30px;
    padding-top: 5px;
}

.proj-category-img-mobile {
    height: 45px;
    width: 35px;
    float: left;
    padding-top: 8px;
    margin-left: 0px;
}

.proj-category-heading-mobile {
    font-size: 13px;
    float: left;
    padding-left: 10px;
    margin: 0px;
    margin-top: 17px;
    color: white;
    text-decoration: underline;
}
</style>