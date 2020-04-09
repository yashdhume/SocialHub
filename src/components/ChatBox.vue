<template>
    <v-app>
        <v-container>
            <v-card class="mx-auto">
                <v-list-item-group >
                    <v-list-item v-for="i in messages" :key="i">
                        <v-spacer v-if="i.send"></v-spacer>
                        <v-chip right pill :color="i.send ?'blue' :''">
                            {{ i.text }}
                        </v-chip>
                    </v-list-item>
                    <v-list-item>
                        <v-textarea
                                append-outer-icon="fas fa-paper-plane"
                                @click:append-outer="sendMessage"
                                v-model=message.text
                                label="Enter Message"
                                rows="1"></v-textarea>
                    </v-list-item>
                </v-list-item-group>
            </v-card>

        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "ChatBox",
        data: () => ({
            socket: new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host),
            message: {
                text: "",
                received: true
            },
            messages: []
        }),
        methods:{
            sendMessage(){
                this.messages.push({
                    text: this.message.text,
                    send: true
                });
                this.socket.send(this.message.text);
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