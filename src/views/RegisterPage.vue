<template>
    <div id="app">
        <v-app id="inspire" style="background: linear-gradient(130deg, #FF0099, #493240);">
            <AppBar :is-logged-in="isLoggedIn" :username="username"></AppBar>
            <LoginBox :is-register="true"></LoginBox>
        </v-app>
    </div>

</template>

<script>
    import AppBar from "@/components/AppBar";
    import LoginBox from "@/components/LoginBox";
    export default {
        name: "LoginPage",
        components: {AppBar, LoginBox},
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