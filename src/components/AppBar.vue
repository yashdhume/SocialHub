<template>
    <v-app-bar flat color="transparent" clipped-right id="AppBar">
        <v-spacer></v-spacer>
        <v-btn
                flat
                color="transparent white--text"
                elevation="0"
                v-for="i in appBarBtns"
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
        data:()=>({
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