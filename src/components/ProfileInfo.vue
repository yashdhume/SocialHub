<template>
    <section>
        <v-container style=" max-width: 620px;" align="center">
            <v-card light style="padding: 10px;">
                <v-row>
                    <v-flex v-for="i in profileSites" :key="i" class="justify-lg-space-around flex-row d-flex flex-row">
                          <v-card light  elevation="0" align="center">
                              <v-card-title>
                                  <v-col>
                                  <v-avatar>
                                      <v-img v-if="data[i].profilePic!=='' && data[i].profilePic!=='self'" :src="data[i].profilePic"> </v-img>
                                      <v-img v-if="data[i].profilePic==='' || data[i].profilePic==='self'" src="https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54b7cd91e4b0b6572f771175/5a9924d20d92970572b7c3b6/1519986489468/icon.png?format=1500w"> </v-img>
                                  </v-avatar>
                                      <p class="title">{{data[i].userName}}</p>
                                      <p class="subtitle-1">{{i}}</p>
                                  </v-col>
                              </v-card-title>
                              <v-card-subtitle>
                                  <v-row>
                                      <v-col>
                                            <p class="subtitle-1">Followers</p>
                                            <p class="title">{{data[i].followersCount.toLocaleString()}}</p>
                                      </v-col>
                                      <v-col>
                                          <p class="subtitle-1">Following</p>
                                          <p v-if="data[i].followingCount!=null" class="title">{{data[i].followingCount.toLocaleString()}}</p>
                                          <p v-if="data[i].followingCount==null" class="title">Unavailable</p>
                                      </v-col>
                                  </v-row>
                              </v-card-subtitle>


                          </v-card>
                    </v-flex>
                </v-row>
            </v-card>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "ProfileInfo",
        props:{
            data: Array,
            search: String,
        },
        data: ()=>({
            profileSites: ["Reddit", "Instagram",  "Youtube", "Twitter"]
        }),
        methods:{

        }
    }
</script>

<style scoped>

</style>