<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <div>
            <v-app-bar flat color="transparent" clipped-right>
                <v-spacer></v-spacer>
                <v-btn flat color="transparent" elevation="0" >Sign up</v-btn>
                <v-btn flat color="transparent" elevation="0" >Login</v-btn>
                <v-btn flat color="transparent" elevation="0" >About</v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

            </v-app-bar>

            <v-container fluid>
                <v-flex ce>
                <v-row>
                    <v-col  align="center"
                            justify="center"
                            style="height: 1000px">

                            <v-img src="@/assets/SocialHubLogoWhite.png" max-width="500" max-height="500" ></v-img>
                        <v-container ></v-container>
                            <p class="text-center ma-5">All your favorite social media in one place.</p>

                        <v-col>
                            <v-btn class="ma-5" outlined>Get Started </v-btn>
                            <v-btn class="ma-5" outlined>Lets go</v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-flex>
            </v-container>

        </div>
    </v-app>
</template>

<script>
    export default {
        name: "SplashPage",

    }
</script>

<style scoped>

</style>