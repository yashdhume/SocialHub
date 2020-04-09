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
                    <v-card light elevation-24 style="padding: 20px; border-radius: 50px;">
                        <v-card-text>
                            <h1>{{r}}</h1>
                            <h1>{{userName}}</h1>
                            <v-form>
                                <v-text-field
                                        label="Username"
                                        prepend-icon="fas fa-user-friends"
                                        type="text"
                                        rounded
                                        v-model="userName"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="Password"
                                        prepend-icon="fas fa-lock"
                                        type="password"
                                        rounded
                                >
                                </v-text-field>
                            </v-form>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    outlined
                                    right
                                    large
                                    v-on:click="enter"
                            >
                                Enter
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios'
    export default {

        name: "LoginBox",
        data: ()=>({
           userName:"",
            r:""
        }),
        methods: {
            enter: function(){
                axios.get(`http://localhost:3000/createUser?username=${this.userName}`).then(r=>{
                    this.r=r;
                });
            }
        }
    }
</script>

<style scoped>

</style>