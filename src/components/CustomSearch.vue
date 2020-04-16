<template>
    <section>
        <v-dialog max-width="600px">
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
                                    v-for="i in fakeData"
                                    :key="i"
                            >
                                <v-list-item-avatar>
                                    <v-icon>fas fa-user</v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="i.name"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>

                                    <v-btn color="blue darken-1" text @click="dialog=true">Edit</v-btn>
                                    <v-btn color="blue darken-1" text>Delete</v-btn>

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
                                <v-text-field label="Instagram Username"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Twitter Username"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        label="Youtube Username"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        label="Sub Reddit"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Leave blank if you want to filter out</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text>Save</v-btn>
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
                        ></v-text-field>
                    </v-card-text>
                    <v-btn
                            color="primary"
                            text
                            @click="dialog = true, dialog2=false"
                    >
                        Enter
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
    export default {
        name: "CustomSearchCreate",
        data: () => ({
            dialog: false,
            dialog2: false,
            fakeData: [
                {name: "as"},
                {name: "asd"}
            ]
        })
    }
</script>

<style scoped>

</style>