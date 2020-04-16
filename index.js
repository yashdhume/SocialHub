const cors = require('cors');
const {MongoClient} = require('mongodb');
const {Endpoints} = require("./server/Endpoints");
const {ChatServer} = require("./server/ChatServer");
const {Database} = require("./server/Database");
const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const port = process.env.PORT || 3000;
const app = express();
const httpServer = http.createServer(app);

//const uri = "mongodb://localhost:27017/";
const uri = "mongodb+srv://SocialHubApp:pass123@socialhub-7ehye.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect().then(_ => {
    let db = new Database(client.db("SocialHub"));
    console.log("Connected to MongoDB");

    let endpoints = new Endpoints(db);

    const wss = new WebSocket.Server({ 'server': httpServer });
    let chatServer = new ChatServer(wss);

    app.use(express.static(__dirname + "/dist"));
    app.use(cors());

    app.get("/", (req, res) => res.sendFile("/index.html"));
    app.get("/search", endpoints.search);
    app.get("/recentSearches", endpoints.recentSearches);

    app.post("/createUser", endpoints.createUser);
    app.post("/signIn", endpoints.signIn);

    //privileged access
    app.use(function(req, res, next) {
        if(!req.header("token")){
            res.send({ error: "Token must be included in header for this action (token=)" });
            return;
        }
        req.query.token = req.header("token");
        next();
    });

    app.get("/presetSearch", endpoints.presetSearch);

    app.get("/getPreset", endpoints.getPreset);
    app.get("/getPresets", endpoints.getPresets);
    app.post("/createPreset", endpoints.createPreset);
    app.post("/editPreset", endpoints.editPreset);
    app.delete("/deletePreset", endpoints.deletePreset);

    httpServer.listen(port);
    console.log("App listening on port "+port);
});