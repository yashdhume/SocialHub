<template>
    <div id="SplashPageComponents">
        <v-container fluid>
            <v-flex ce>
                <v-row>
                    <v-col align="center"
                           justify="center"
                           style="height: 1000px">

                        <v-img src="@/assets/SocialHubLogoWhite.png" max-width="500" max-height="500"></v-img>
                        <v-container></v-container>
                        <p class="text-center ma-5">All your favorite social media in one place.</p>

                        <v-col>
                            <v-btn class="ma-5" outlined>Get Started</v-btn>
                            <v-btn class="ma-5" outlined>Lets go</v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-flex>
        </v-container>

    </div>
</template>

<script>
    export default {
        name: "SplashPageComponents"
    }
</script>

<style scoped>

</style>