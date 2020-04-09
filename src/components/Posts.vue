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
                        :href="i.link"
                        light
                        max-width="600"
                        class="mx-auto"
                >
                    <v-list-item>
                        <v-list-item-avatar >
                            <v-icon large :color="getIcon(i.site)[1]">{{getIcon(i.site)[0]}}</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="title">{{i.site}}</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1">{{getTime(new Date(i.timestamp))}}</v-list-item-subtitle>

                        </v-list-item-content>
                    </v-list-item>
                    <v-img
                            :src="i.image"
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
            getTime:(time)=> {
                const timeDiff = new Date().getTime() - time;

                if (timeDiff < 60000) {
                    return Math.round(timeDiff/1000) + ' seconds ago';
                }

                else if (timeDiff < 3600000) {
                    return Math.round(timeDiff/60000) + ' minutes ago';
                }

                else if (timeDiff < 86400000 ) {
                    return Math.round(timeDiff/3600000 ) + ' hours ago';
                }

                else if (timeDiff < 2592000000) {
                    return  Math.round(timeDiff/86400000) + ' days ago';
                }

                else if (timeDiff < 946080000000) {
                    return Math.round(timeDiff/2592000000) + ' months ago';
                }

                else {
                    return Math.round(timeDiff/946080000000 ) + ' years ago';
                }
            },
            getIcon:(str)=> {
                if(str==="Instagram"){
                    return ["fab fa-instagram", "pink"]
                }
                else if (str==="Reddit"){
                    return ["fab fa-reddit", "red"]
                }
                else if(str==="Youtube"){
                    return ["fab fa-youtube", "red"]
                }
            }
        },
    }
</script>

<style scoped>

</style>