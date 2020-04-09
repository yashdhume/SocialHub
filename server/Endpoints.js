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
        let vars = loadVariables(req, res, ["username"]);
        if(!vars){ return; }

        let existing = await db.getUser(vars.username);
        if(existing){
            res.send({ error: "A user already exists with this username" });
            return;
        }

        await db.createUser(vars.username);
        res.send({ success: "User created successfully" });
    };

    this.getFavorites = async (req, res) => {
        let vars = loadVariables(req, res, ["username"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.username);
        if(!user) {
            res.send({error: "User does not exist"});
            return;
        }

        res.send(user.favorites);
    };

    this.addFavorite = async (req, res) => {
        let vars = loadVariables(req, res, ["username", "favorite"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.username);
        if(!user){
            res.send({ error: "User does not exist"});
            return;
        }

        if(user.favorites.includes(vars.favorite)){
            res.send({ error: "New favorite is already one of this user's favorites"});
            return;
        }

        let success = await db.addFavorite(vars.username, vars.favorite);
        if(!success){
            res.send({ error: "Something went wrong. Favorite was not added" });
            return;
        }

        res.send({ "success": "Favorite added successfully" });
    };

    this.removeFavorite = async (req, res) => {
        let vars = loadVariables(req, res, ["username", "favorite"]);
        if(!vars){ return; }

        let user = await db.getUser(vars.username);
        if(!user){
            res.send({ error: "User does not exist"});
            return;
        }

        if(!user.favorites.includes(vars.favorite)){
            res.send({ error: "Removed favorite is not one of this user's favorites"});
            return;
        }

        let success = await db.removeFavorite(vars.username, vars.favorite);
        if(!success){
            res.send({ error: "Something went wrong. Favorite was not removed" });
            return;
        }

        res.send({ "success": "Favorite removed successfully" });
    }
}

module.exports = { Endpoints };