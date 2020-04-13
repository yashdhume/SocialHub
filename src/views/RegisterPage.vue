<template>
    <div id="app">
        <v-app id="inspire" style="background: linear-gradient(130deg, #FF0099, #493240);">
            <AppBar :appBarBtns="appBarBtns"></AppBar>
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
        data: ()=>({
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
                    route: "",
                },
            ],
        })
    }
</script>

<style scoped>

</style>