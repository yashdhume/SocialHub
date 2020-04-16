const {fullSearch, search} = require("./api/apis");
const {ObjectID} = require("mongodb");

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

    this.presetSearch = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "presetID"]);
        if(!vars){ return; }

        let preset = await db.getPreset(vars.token, ObjectID(vars.presetID));
        if(preset.error){
            res.send(preset);
            return;
        }

        res.send(await search(preset.usernames));
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

    this.getPreset = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "presetID"]);
        if(!vars){ return; }

        res.send(await db.getPreset(vars.token, ObjectID(vars.presetID)));
    };

    this.getPresets = async (req, res) => {
        let vars = loadVariables(req, res, ["token"]);
        if(!vars){ return; }

        res.send(await db.getPresets(vars.token))
    };

    this.createPreset = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "preset"]);
        if(!vars){ return; }

        res.send(await db.addPreset(vars.token, vars.preset));
    };

    this.editPreset = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "presetID", "usernames"]);
        if(!vars){ return; }

        try{
            vars.usernames = JSON.parse(vars.usernames);
        }
        catch (e) {
            res.send({error: "Usernames JSON is not formatted correctly"});
            return;
        }

        res.send(await db.editPreset(vars.token, ObjectID(vars.presetID), vars.usernames));
    };

    this.deletePreset = async (req, res) => {
        let vars = loadVariables(req, res, ["token", "presetID"]);
        if(!vars){ return; }

        res.send(await db.removePreset(vars.token, ObjectID(vars.presetID)));
    };
}

module.exports = { Endpoints };