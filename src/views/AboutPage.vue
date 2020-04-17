<template>
    <div id="app">
        <v-app id="inspire" style="background: linear-gradient(130deg, #FF0099, #493240);">
            <AppBar></AppBar>
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
    }
</script>

<style scoped>

</style>