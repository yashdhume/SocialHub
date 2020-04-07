<template>
    <section>

        <v-container
                v-for="i in data"
                :key="i"
        >
            <v-lazy
                    v-model="isActive"
                    :options="{
            threshold: 1
          }"
                    min-height="100"
                    transition="fab-transition"
            >
                <v-card
                        light
                        max-width="600"
                        class="mx-auto"
                >
                    <v-list-item>
                        <v-list-item-avatar >
                            <!--                    <v-img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s320x320/54511895_268031237473443_8504595524563763200_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=07fcHIwe_8MAX_clN9P&oh=4f8736a8f292643053bc91e6f257e370&oe=5EB6FCB3"></v-img>-->
                            <v-icon large :color="getIcon(i.site)[1]">{{getIcon(i.site)[0]}}</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="title">{{i.site}}</v-list-item-title>

                        </v-list-item-content>
                    </v-list-item>
                    <v-img
                            :src="i.link"
                            contain
                    ></v-img>

                    <v-card-text>
                        {{i.caption}}
                    </v-card-text>

                </v-card>
            </v-lazy>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Posts",
        props: {
            data : Array
        },
        methods:{

            getIcon:(str)=> {
                if(str==="instagram"){
                    return ["fab fa-instagram", "pink"]
                }
                else if (str==="reddit"){
                    return ["fab fa-reddit", "red"]
                }
            }
        },
    }
</script>

<style scoped>

</style>