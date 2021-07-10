<template>
    <div>
        <div class="center">

            <div class="proj-categories-mobile">
                <v-expansion-panels dark tile>
                    <v-expansion-panel @click="expandCategories()">

                        <v-expansion-panel-header>
                            {{showOrHide}} All Project Categories&nbsp;&nbsp;
                            <div class="mobile-proj-icon"><v-icon>{{mobileCategoriesExpanded ? 'expand_less' : 'expand_more'}}</v-icon></div>
                        </v-expansion-panel-header>

                        <div v-for="category in categories" :key="category.id">
                            <v-expansion-panel-content>
                                <project-category :category="category" mobile light></project-category>
                            </v-expansion-panel-content>
                        </div>

                    </v-expansion-panel>
                </v-expansion-panels>
            </div>

            <p class="header">Projects</p>

            <div class="proj-categories-desktop">
                <div v-for="category in categories" :key="category.id">
                    <project-category :category="category" desktop dark></project-category>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import { Categories } from './tempdata/categories';
import ProjectCategory from './ProjectCategory';

export default {
    components: {
        projectCategory: ProjectCategory
    },
    data() {
        return {
            categories: Categories,
            mobileCategoriesExpanded: false,
            showOrHide: "Show"
        };
    },
    methods: {
        expandCategories: function() {
            this.mobileCategoriesExpanded = !this.mobileCategoriesExpanded;
            if(this.mobileCategoriesExpanded) this.showOrHide = "Hide";
            else this.showOrHide = "Show";
        }
    }
};
</script>

<style scoped>
.proj-categories-desktop {
	display: flex;
	justify-content: center;
}

.proj-categories-mobile {
	display: none;
    text-align: center;
}

@media screen and (max-width: 620px) {
    .proj-categories-desktop {
		display: none;
	}

	.proj-categories-mobile {
        display: block;
	}

    .proj-categories-mobile-button {
        padding-top: 10px;
        padding-bottom: 0px;
    }

    .mobile-proj-icon {
        margin-left: auto;
        margin-right: 0;
    }
}
</style>