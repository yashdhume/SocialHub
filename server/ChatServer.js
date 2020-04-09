
const supportMsg = "Welcome to SocialHub Support (tm). To speak to one of our certified tech professionals, please enter your name, and the issue you're facing.";

function ChatServer(wss){
    wss.on("connection", ws => {
        ws.on("message", (msg) => {
            wss.clients.forEach(client => {
               if(client !== ws){
                   client.send(msg);
               }
            });
        });
        ws.send(supportMsg);
    });
}

module.exports = { ChatServer };