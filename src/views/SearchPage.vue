<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar></AppBar>
        <section v-if="isSearchesLoaded">
            <v-container style="width: 620px">
                <v-row align="center">
                    <v-combobox
                            :items="isFavorite ?searches:favorites"
                            label="Search"
                            solo
                            light
                            persistent-hint="true"
                            v-model="searchQuery"
                            v-on:keyup.enter="getData"
                            prepend-inner-icon="mdi-magnify"
                    >
                    </v-combobox>
                </v-row>
                <custom-search></custom-search>
            </v-container>
        </section>

        <section v-if="isDataLoaded">
            <ProfileInfo :data="profileInfo" :search="searchQuery"></ProfileInfo>
            <Posts :data="posts"></Posts>
        </section>



    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import Posts from "@/components/Posts";
    import ProfileInfo from "@/components/ProfileInfo";
    import CustomSearch from "@/components/CustomSearch";
    import axios from 'axios'
    export default {
        name: "SearchPage",
        components: {AppBar, Posts, ProfileInfo, CustomSearch},
        created (){
            this.getRecentSearches();
            this.favorite();
        },
        methods:{
            changeFav: function(){
               // this.favorite();
                this.isFavorite = !this.isFavorite;
            },
            favorite: function(){
                axios
                    .get(`https://socialhub1.herokuapp.com/getFavorites`, {headers:{'token': this.$store.getters.token}})
                    .then(r=>{
                        this.favorites = r.data;
                        this.isFavorite=true;
                    });
            },
            getRecentSearches: function(){
                axios
                    .get(`https://socialhub1.herokuapp.com/recentSearches?amount=100`)
                    .then(r=>{
                        this.isSearchesLoaded=true;
                        r.data.forEach((data)=> {
                            this.searches.push(data.search);
                        });
                    });
            },
            getData: function(){
                axios
                    .get(`https://socialhub1.herokuapp.com/search?name=${this.searchQuery}`)
                    .then(r=>{
                        this.posts=r.data.posts;
                        this.profileInfo=r.data.accountInfo;
                        this.isDataLoaded=true;
                    });
            },
        },
        data: ()=>({
            isLoggedIn: false,
            isFavorite: false,
            favorites: [],
            searches: [],
            test: '',
            isSearchesLoaded: false,
            searchQuery:'',
            isDataLoaded: false,
            posts:[],
            profileInfo:[],
        })
    }
</script>

<style scoped>
</style>