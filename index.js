const express = require('express');
const app = express();
const cors = require('cors');
const {MongoClient} = require('mongodb');
const {Endpoints} = require("./server/Endpoints");
const {Database} = require("./server/Database");

const port = 3000;

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect().then(_ => {
    let db = new Database(client.db("SocialHub"));
    console.log("Connected to MongoDB");

    let endpoints = new Endpoints(db);

    app.use(cors());

    app.get("/", (req, res) => res.send("vue js main page"));
    app.get("/search", endpoints.search);
    app.get("/userSettings", (req, res) => res.send("get the settings for a user of social hub (JSON format)"));
    app.get("/recentSearches", endpoints.recentSearches);

    app.listen(port, () => console.log("Example app listening on port "+port));
});