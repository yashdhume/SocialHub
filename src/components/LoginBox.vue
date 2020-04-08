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
                    <v-card light elevation-24 style="padding: 20px; border: 1px; border-radius: 50px;">
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        label="Username"
                                        prepend-icon="fas fa-user-friends"
                                        type="text"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="Password"
                                        prepend-icon="fas fa-lock"
                                        type="password"
                                >
                                </v-text-field>
                            </v-form>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn outlined  right large>Enter</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "LoginBox"
    }
</script>

<style scoped>

</style>