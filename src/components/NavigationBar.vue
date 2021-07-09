<template>
    <div>
        <v-app-bar
        color="dark accent-4"
        dense
        dark>

            <v-menu dark left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>reorder</v-icon>
                    </v-btn>
                </template>
                <div class="page-nav">
                    <v-list 
                        dark
                        width="300px" 
                    >
                        
                        <v-list-item to="/">
                            <v-list-item-title><v-icon>home</v-icon> Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/projects">
                            <v-list-item-title><v-icon>content_paste</v-icon> Projects</v-list-item-title>
                        </v-list-item>
                        
                        <v-list-item href="#">
                            <v-list-item-title><v-icon>headphones</v-icon> Music</v-list-item-title>
                        </v-list-item>
                        <v-list-item href="#">
                            <v-list-item-title><v-icon>storefront</v-icon> Store</v-list-item-title>
                        </v-list-item>
                        <v-list-item href="#">
                            <v-list-item-title><v-icon>email</v-icon> Message Board</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
            </v-menu>

            <v-toolbar-title>Anti-Static Software</v-toolbar-title>

            <v-spacer></v-spacer>

                <v-btn icon class="desktop-search-hide">
                    <v-icon>search</v-icon>
                </v-btn>
                <div class="desktop-search-margin desktop-search-hide">
                    <v-text-field 
                        label="Search" 
                        single-line 
                        clearable>
                    </v-text-field>
                </div>

                <v-btn icon class="mobile-search-hide" @click="searching=!searching">
                    <v-icon>search</v-icon>
                </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>account_circle</v-icon>
                    </v-btn>
                </template>

                <div class="page-nav">
                    <v-list dark>
                        <v-list-item href="#">
                            <v-list-item-title><v-icon>login</v-icon> Log In</v-list-item-title>
                        </v-list-item>
                        <v-list-item href="#">
                            <v-list-item-title><v-icon>app_registration</v-icon> Sign Up</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
            </v-menu>
        </v-app-bar>

        <transition name="slide-fade">
            <div class="mobile-search-hide" v-if="searching">
                <v-text-field 
                    label="Search" 
                    single-line 
                    clearable
                    class="mobile-search-style">
                </v-text-field>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
        searching: false
    };
  }
};
</script>

<style scoped>
.page-nav {
    margin-top: 36px;
}
.desktop-search-margin {
    margin-top: 20px;
}
.mobile-search-hide {
    display: none;
}
.desktop-search-hide {
    display: inline;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@media screen and (max-width: 600px) {
	.desktop-search-hide {
		display: none;
	}
    .mobile-search-hide {
        display: inline;
    }
}
</style>