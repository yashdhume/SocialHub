<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :appBarBtns="appBarBtns"></AppBar>
        <SplashPageComponents/>
        <ChatBox></ChatBox>
    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import SplashPageComponents from "@/components/SplashPageComponents";
    import ChatBox from "@/components/ChatBox";
    export default {
        name: "SplashPage",
        components: {SplashPageComponents, AppBar, ChatBox},
        data: () => {
            return {
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
            }
        },
    }
</script>

<style scoped>
</style>