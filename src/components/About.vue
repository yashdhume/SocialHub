<template>
<v-content>
    <v-container
            fluid
    >
        <v-layout
                align-center
                justify-center
        >
            <v-flex
                    xs12
                    sm8
                    md4
            >
                <v-card light elevation-24 style="padding: 25px; border-radius: 50px;">
                    <v-card-title class="justify-center">
<!--                        TODO add a title-->
                            <h1>ABOUT US</h1>

                    </v-card-title>
                    <v-card-subtitle>
<!--                        TODO add small text under title-->
                            <h2 class="text-center mt-12">Who are we?</h2>

                    </v-card-subtitle>
                    <v-card-text>
<!--                        TODO add you stuff here-->
                            <h3 class="text-center">
                                We are Social Hub. The one stop-shop for all your social media
                                platforms. We combine Instagram, Youtube, Twitter, and Reddit
                                into a single feed allowing you to search your favourite celebrities,
                                artists, and idols. Simply type a name, search, and scroll away!
                            </h3>

                    </v-card-text>
                    <v-card-subtitle>
<!--                        TODO add small text under title-->
                            <h2 class="text-center mt-2">What are our values?</h2>

                    </v-card-subtitle>
                    <v-card-text>
<!--                        TODO add you stuff here-->
                            <h3 class="text-center">
                                At Social Hub, we value adventure, integrity, and a sense of community. 
                                We want all our users to enjoy this brand new experience and join us as we
                                embark on this new journey. We also value your feedback so feel free
                                to let us know about future recommendations to improve your experience.
                            </h3>

                    </v-card-text>
<!--                TODO add things at the bottom-->
                    <!-- Footer -->
                        <div class="footer-copyright text-center py-3">
                          <v-container fluid>
                            &copy; 2020 Copyright: <a href=""> socialhub.com </a>
                          </v-container>
                        </div>

                    <!-- Footer -->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-content>
</template>

<script>
    export default {
        name: "AboutPage"
    }
</script>

<style scoped>

</style>