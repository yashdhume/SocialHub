<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar  :is-logged-in="isLoggedIn" :username="username"></AppBar>
        <SplashPageComponents/>
    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import SplashPageComponents from "@/components/SplashPageComponents";
    export default {
        name: "SplashPage",
        components: {SplashPageComponents, AppBar},
        created(){
            this.isLoggedIn= this.$store.getters.isLoggedIn;
            this.username = this.$store.getters.username;
        },
        data: ()=>({
            isLoggedIn:false,
            username: ''
        })
    }
</script>

<style scoped>
</style>