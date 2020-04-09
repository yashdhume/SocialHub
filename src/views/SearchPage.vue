<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :appBarBtns="appBarBtns"></AppBar>
        <v-container style="width: 620px">
            <section v-if="isSearchesLoaded">
                <v-combobox
                        :items="searches"
                        label="Search"
                        solo
                        light
                        persistent-hint="true"
                        v-model="searchQuery"
                        v-on:keyup.enter="getData"
                        prepend-inner-icon="mdi-magnify"
                ></v-combobox>
            </section>
        </v-container>
        <section v-if="isDataLoaded">
            <ProfileInfo :data="profileInfo"></ProfileInfo>
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
            this.getRecentSearches()
        },
        methods:{
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
            searches: [],
            isSearchesLoaded: false,
            searchQuery:'',
            isDataLoaded: false,
            posts:[],
            profileInfo:[],
            appBarBtns: [
                {
                    text: "Login",
                    route: "",
                },
                {
                    text: "Sign Up",
                    route: "",
                },
                {
                    text: "About",
                    route: "",
                },
            ],
        })
    }
</script>

<style scoped>
</style>