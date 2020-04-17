<template>
    <section>
        <v-dialog max-width="600px" v-model="dialogMain">
            <template v-slot:activator="{ on }">
                <v-btn  outlined dark v-on="on">Custom Search</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Custom Search</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-list-item
                                    v-for="i in presets"
                                    :key="i"
                            >
                                <v-list-item-avatar>
                                    <v-icon>fas fa-user</v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{i.name}}</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn color="blue darken-1" text @click="searchPreset(i._id)">Search</v-btn>
                                    <v-btn color="blue darken-1" text @click="dialog=true, curId=i._id">Edit</v-btn>
                                    <v-btn color="blue darken-1" text @click="removeSearch(i._id)">Delete</v-btn>

                                </v-list-item-action>
                            </v-list-item>

                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark @click="dialog2=true">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="650">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Custom Search</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="instagramInput" label="Instagram Username"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="twitterInput" label="Twitter Username"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        v-model="youtubeInput"
                                        label="Youtube Username"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        v-model="redditInput"
                                        label="Sub Reddit"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Leave blank if you want to filter out</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="editPreset(curId), dialog2=false" text>Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="dialog2"
                max-width="500px"
        >
            <v-card>
                <v-card-title>Add a Custom Search</v-card-title>
                <v-card-actions>
                    <v-card-text>
                        <v-text-field
                                label="Enter a Custom Name"
                                single-line
                                v-model="addCustomSearchName"
                        ></v-text-field>
                    </v-card-text>
                    <v-btn
                            color="primary"
                            text
                            @click="createPreset"
                    >
                        Enter
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
    import SearchPage from "@/views/SearchPage";
    import axios from 'axios'
    export default {
        name: "CustomSearchCreate",
        data: () => ({
            curId: null,
            dialog: false,
            dialog2: false,
            dialogMain: false,
            presets: null,
            addCustomSearchName: "",
            instagramInput: "",
            twitterInput: "",
            redditInput: "",
            youtubeInput: ""
        }),
        created(){
            this.getPreset()
        },

        methods:{
            getPreset: function () {
                axios.get(`https://socialhub1.herokuapp.com/getPresets`, {headers:{'token': this.$store.getters.token}}).then(r => {
                   this.presets = r.data;
                });
            },
            editPreset: function (id) {
                let data= {"Twitter": this.twitterInput,
                    "Instagram": this.instagramInput,
                    "Youtube": this.youtubeInput,
                    "Reddit": this.redditInput,
                };
                Object.keys(data).forEach(r=>{
                    if(data[r]===""){delete data[r]}
                });
                axios.post(`https://socialhub1.herokuapp.com/editPreset?presetID=${id}&usernames=${JSON.stringify(data)}`, {},{headers:{'token': this.$store.getters.token}}).then(r=>console.log(r))
            },
            createPreset: function () {
                this.dialog = false;
                this.dialog2=false;
                axios.post(`https://socialhub1.herokuapp.com/createPreset?name=${this.addCustomSearchName}`, {},{headers:{'token': this.$store.getters.token}}).then(r=>{console.log(r)});
            },
            removeSearch: function(id){
                axios.delete(`https://socialhub1.herokuapp.com/deletePreset?presetID=${id}`, {headers:{'token': this.$store.getters.token}});
            },
           searchPreset: function(id){
               this.dialog=false;
               this.dialog2=false;
               this.dialogMain=false;
                   axios.get(`https://socialhub1.herokuapp.com/presetSearch?presetID=${id}`, {headers:{'token': this.$store.getters.token}}).then(r=>{
                    this.$store.commit('dataSend', r)
                    SearchPage.methods.customSearch();
                });
           }
        }
    }
</script>

<style scoped>

</style>