<template>
    <v-app>
        <v-container>
            <v-card class="">
                <v-list-item-group >
                    <v-card-text style="height: 600px; overflow-y: auto;">
                    <v-list-item v-for="i in messages" :key="i" >
                        <v-spacer v-if="i.send"></v-spacer>
                        <v-chip right pill :color="i.send ?'blue' :''">
                            {{ i.text }}
                        </v-chip>
                    </v-list-item>
                    </v-card-text>
                    <v-card-actions>
                        <v-textarea
                                id="textBox"
                                clearable
                                append-outer-icon="fas fa-paper-plane"
                                @click:append-outer="sendMessage"
                                v-on:keydown.enter="sendMessage"
                                v-model=message.text
                                label="Enter Message"
                                solo></v-textarea>
                    </v-card-actions>
                </v-list-item-group>
            </v-card>

        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "ChatBox",
        data: () => ({
            socket: new WebSocket("wss://socialhub1.herokuapp.com/"),
            message: {
                text: "",
                received: true
            },
            messages: []
        }),
        methods:{
            sendMessage: function (){
                this.messages.push({
                    text: this.message.text,
                    send: true
                });
                this.socket.send(this.message.text);
                this.message.text="";
            },
            connectToChat(){
                this.socket.onmessage = ev => {
                    this.messages.push({
                        text: ev.data,
                        send: false
                    });
                }
            }
        },
        created(){
            this.connectToChat();
        }
    }
</script>

<style scoped>

</style>