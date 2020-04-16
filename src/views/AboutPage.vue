<template>
    <div id="app">
        <v-app id="inspire" style="background: linear-gradient(130deg, #FF0099, #493240);">
            <AppBar  :is-logged-in="isLoggedIn" :username="username"></AppBar>
            <About></About>
        </v-app>
    </div>

</template>

<script>
    import About from "@/components/About";
    import AppBar from "@/components/AppBar";
    export default {
        name: "AboutPage",
        components: {AppBar, About},
        created(){
            this.isLoggedIn= this.$store.getters.isLoggedIn;
            this.username = this.$store.getters.username;
        },
        data: ()=>({
            isLoggedIn:false,
            username: ""
        })
    }
</script>

<style scoped>

</style>