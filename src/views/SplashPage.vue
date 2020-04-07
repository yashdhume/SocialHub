<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :appBarBtns="appBarBtns"></AppBar>
        <SplashPageComponents/>
    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import SplashPageComponents from "@/components/SplashPageComponents";
    export default {
        name: "SplashPage",
        components: {SplashPageComponents, AppBar},
        data: () => {
            return {
                appBarBtns: [
                    {
                        text: "Login",
                        route: "/loginPage",
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
            }
        },
    }
</script>

<style scoped>
</style>