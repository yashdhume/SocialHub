<template>
    <div id="app">
        <v-app id="inspire" style="background: linear-gradient(130deg, #FF0099, #493240);">
            <AppBar></AppBar>
            <LoginBox :is-register="false"></LoginBox>

        </v-app>
    </div>

</template>

<script>
    import AppBar from "@/components/AppBar";
    import LoginBox from "@/components/LoginBox";
    export default {
        name: "LoginPage",
        components: {AppBar, LoginBox},

    }
</script>

<style scoped>

</style>