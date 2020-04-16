<template>
    <v-app-bar flat color="transparent" clipped-right id="AppBar">
        <v-spacer></v-spacer>
        <v-chip
                v-if="isLoggedIn"
                class="ma-2"
                color="white"
                text-color="white"
                outlined
        >
            <v-avatar left>
                <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            {{username}}
        </v-chip>
        <v-btn
                flat
                color="transparent white--text"
                elevation="0"
                v-for="i in isLoggedIn ?appBarLoggedIn: appBarBtns"
                :key="i"
                :to="i.route">
            {{i.text}}
        </v-btn>
        <v-btn icon to="/searchPage">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        props:{
          isLoggedIn: Boolean,
            username: String,
        },
        data:()=>({
            appBarLoggedIn:[
                {
                    text: "About",
                    route: "/aboutPage",
                },
            ],
            appBarBtns: [
                {
                    text: "Login",
                    route: "/loginPage",
                },
                {
                    text: "Sign Up",
                    route: "/registerPage",
                },
                {
                    text: "About",
                    route: "/aboutPage",
                },
            ],
        }),
    }
</script>

<style scoped>

</style>