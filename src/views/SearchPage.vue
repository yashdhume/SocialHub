<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :is-logged-in="isLoggedIn" :username="username"></AppBar>
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
                    <v-icon v-on:click="changeFav" :color="isFavorite ? 'white' : 'blue'">fas fa-star</v-icon>
                </v-row>
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
    import axios from 'axios'
    export default {
        name: "SearchPage",
        components: {AppBar, Posts, ProfileInfo},
        created (){
            this.getRecentSearches();
            this.favorite();
            this.isLoggedIn= this.$store.getters.isLoggedIn;
            this.username = this.$store.getters.username;
        },
        methods:{
            changeFav: function(){
               // this.favorite();
                this.isFavorite = !this.isFavorite;
            },
            favorite: function(){
                axios
                    .get(`http://localhost:3000/getFavorites`, {headers:{'token': this.$store.getters.token}})
                    .then(r=>{
                        this.favorites = r.data;
                        this.isFavorite=true;
                    });
            },
            getRecentSearches: function(){
                axios
                    .get(`http://localhost:3000/recentSearches?amount=100`)
                    .then(r=>{
                        this.isSearchesLoaded=true;
                        r.data.forEach((data)=> {
                            this.searches.push(data.search);
                        });
                    });
            },
            getData: function(){
                axios
                    .get(`http://localhost:3000/search?name=${this.searchQuery}`)
                    .then(r=>{
                        this.posts=r.data.posts;
                        this.profileInfo=r.data.accountInfo;
                        this.isDataLoaded=true;
                    });
            },
        },
        data: ()=>({
            username: '',
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