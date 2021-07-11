<template>
    <div>
        <div class="center">

            <div v-if="projectsArePresent" class="proj-categories-mobile">
                <v-expansion-panels dark tile>
                    <v-expansion-panel @click="expandCategories()">

                        <v-expansion-panel-header>
                            {{showOrHide}} All Project Categories&nbsp;&nbsp;
                            <div class="mobile-proj-icon"><v-icon>{{mobileCategoriesExpanded ? 'expand_less' : 'expand_more'}}</v-icon></div>
                        </v-expansion-panel-header>

                        <div v-for="category in categories" :key="category.id">
                            <v-expansion-panel-content>
                                <project-category-head :category="category" mobile light></project-category-head>
                            </v-expansion-panel-content>
                        </div>

                    </v-expansion-panel>
                </v-expansion-panels>
            </div>

            <p class="header">Projects</p>

            <div class="proj-categories-desktop">
                <div v-for="category in categories" :key="category.id">
                    <project-category-head :category="category" desktop dark></project-category-head>
                </div>
            </div>

            <div v-for="category in categories" :key="category.id">
                <project-category-section :category="category"></project-category-section>
            </div>

            <div v-if="!projectsArePresent">
                There are no projects yet!
            </div>
        </div>
    </div>
</template>

<script>
import { Projects } from './tempdata/projects';
import { Categories } from './tempdata/categories';
import ProjectCategoryHead from './ProjectCategoryHead';
import ProjectCategorySection from './ProjectCategorySection';

export default {
    components: {
        projectCategoryHead: ProjectCategoryHead,
        projectCategorySection: ProjectCategorySection
    },
    data() {
        return {
            categories: Categories,
            mobileCategoriesExpanded: false,
            showOrHide: "Show",
            projects: Projects
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
        projectsArePresent() {
            return this.projects.length > 0
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