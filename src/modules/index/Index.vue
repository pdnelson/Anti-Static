<template>
    <div>
        <div class="center">
            <p class="header">Anti-Static Software</p>
        </div>

        <div v-for="pageSection in pageSectionsInIndex" :key="pageSection.id">
            <page-section :pageSection="pageSection"></page-section>
        </div>
    </div>
</template>

<script>
import { PageSections } from '../../data/pageSections';
import PageSection from "../pagesection/PageSection";

export default {  
  components: {
    pageSection: PageSection
  },
  data() {
      return {
          pageSections: PageSections
      };
  },
  computed: {
    pageSectionsInIndex() {
        return this.pageSections.filter(pageSection => 
        pageSection.objectType == 'index')
        .sort((a, b) => (a.order > b.order) ? 1 : -1)
    }
  }
};
</script>

<style scoped>
</style>