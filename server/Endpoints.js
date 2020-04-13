const {fullSearch} = require("./api/apis");

function loadVariables(req, res, varNames){
    let missing = varNames.find(i => !req.query[i]);
    if(missing){
        res.send({ error: "Missing variable: "+missing });
        return null;
    }
    let out = {};
    varNames.forEach(i => out[i] = req.query[i]);
    return out;
}

function Endpoints(db) {

    this.search = async (req, res) => {
        let vars = loadVariables(req, res, ["name"]);
        if(!vars){ return; }

        let success = await db.logSearch(vars.name);
        if(!success){
            console.log("Error: Something went wrong. Search was not logged");
        }

        res.send(await fullSearch(vars.name));
    };

    this.recentSearches = async (req, res) => {
        let vars = loadVariables(req, res, ["amount"]);
        if(!vars){ return; }

        res.send(await db.getRecentSearches(parseInt(vars.amount)));
    };

    this.createUser = async (req, res) => {
        let vars = loadVariables(req, res, ["username", "password"]);
        if(!vars){ return; }

        res.send(await db.createUser(vars.username, vars.password));
    };

    this.signIn = async (req, res) => {
        let vars = loadVariables(req, res, ["username", "password"]);
        if(!vars){ return; }

        res.send(await db.createToken(vars.username, vars.password));
    };

    this.getFavorites = async (req, res) => {
        let vars = loadVariables(req, res, ["token"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.token);
        if(user.error) {
            res.send(user);
            return;
        }

        res.send(user.favorites);
    };

    this.addFavorite = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "favorite"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.token);
        if(user.error) {
            res.send(user);
            return;
        }

        if(user.favorites.includes(vars.favorite)){
            res.send({ error: "New favorite is already one of this user's favorites"});
            return;
        }

        res.send(await db.addFavorite(vars.token, vars.favorite));
    };

    this.removeFavorite = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "favorite"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.token);
        if(user.error) {
            res.send(user);
            return;
        }

        if(!user.favorites.includes(vars.favorite)){
            res.send({ error: "Removed favorite is not one of this user's favorites"});
            return;
        }

        res.send(await db.removeFavorite(vars.token, vars.favorite));
    }
}

module.exports = { Endpoints };