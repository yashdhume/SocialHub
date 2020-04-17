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
                            <h1>{{isRegister ? "Sign Up" :"Login"}}</h1>
                            <v-form>
                                <v-text-field
                                        label="Username"
                                        prepend-icon="fas fa-user-friends"
                                        type="text"
                                        rounded
                                        v-model="userName"
                                        :error-messages="r"
                                        :rules="rulesUserName"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="Password"
                                        prepend-icon="fas fa-lock"
                                        type="password"
                                        rounded
                                        v-model="password"
                                        :rules="rulesPassword"
                                >
                                </v-text-field>
                                <v-text-field
                                        v-if="isRegister"
                                        label="Confirm Password"
                                        prepend-icon="fas fa-lock"
                                        type="password"
                                        rounded
                                        v-model="confirmPassword"
                                        :rules="rulesConfirmPassword"
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
                                    @click="enter"
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
    import router from "@/router";

    export default {

        name: "LoginBox",
        props:{
            isRegister: Boolean
        },
        computed:{
            rulesConfirmPassword(){
                return (this.password === this.confirmPassword) || "Password must match";
            }
        },
        data: ()=>({
           userName:"",
            password: "",
            confirmPassword: "",
            r: "",
            rulesUserName: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
                value => (value || '').length >=  3 || 'Min 3 characters',
            ],
            rulesPassword: [
                value => !!value || 'Required.',
                value =>( new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})").test(value)||"Password need to be 8 characters, At least 1 lowercase, uppercase & symbol")
            ],


        }),
        methods: {
            enter: function(){
                if(this.isRegister) {
                    axios.post(`http://localhost:3000/createUser?username=${this.userName}&password=${this.password}`).then(r => {
                        if (r.data.success === "User was created") router.push("/loginPage");

                        else this.r = r.data.error

                    });
                }
                else{
                    axios.post(`http://localhost:3000/signIn?username=${this.userName}&password=${this.password}`).then(r => {
                        if (r.data!==undefined){
                            this.$store.commit('LoginSuccessful', r.data, this.userName);
                            router.push("/searchPage");
                        }
                        else this.r = r.data.error

                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>