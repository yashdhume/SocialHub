const bcrypt = require('bcrypt');

function calculateTokenValidTime() {
    return new Date().getTime() + 1000 * 60 * 10; //10 minutes
}

function Database(db){

    this.logSearch = async (search) => {
        let res = await db.collection("Searches").insertOne({ search: search, timestamp: new Date().getTime() });
        return res.result.ok === 1;
    };

    this.logPresetSearch = async (presetID) => {
        let res = await db.collection("Searches").insertOne({ searchPresetID: presetID, timestamp: new Date().getTime() });
        return res.result.ok === 1;
    };

    this.getRecentSearches = async (searchCount) => {
        return Array.from(await db.collection("Searches").find().sort({ timestamp: -1 }).limit(searchCount).toArray());
    };

    this.createUser = async (username, password) => {
        let existing = await db.collection("Users").findOne({username: username});
        if(existing){ return {error: "User already exists"}}

        let hash = bcrypt.hashSync(password, 10);
        await db.collection("Users").insertOne({username: username, passwordHash: hash, favorites: []});
        return {success: "User was created"};
    };

    this.createToken = async (username, password) => {
        let res = await db.collection("Users").findOne({ username: username });
        if(!res){ return {error: "User does not exist"}; }
        if(!bcrypt.compareSync(password, res.passwordHash)){ return {error: "Bad login credentials" }}

        //remove existing
        await db.collection("Tokens").removeOne({ username: username });

        await db.collection("Tokens").insertOne({username: username, validUntil: calculateTokenValidTime()});
        res = await db.collection("Tokens").findOne({username: username});
        if(!res){
            return {error: "Something went wrong while generating a token"};
        }
        return res._id;
    };

    this.validateToken = async (token) => {
        let existing = await db.collection("Tokens").findOne({ _id: token });
        if(!existing){ return {error: "Token does not exist"}; }
        if(new Date().getTime() > existing.validUntil){ return {error: "Token has expired"}; }
        await db.collection("Tokens").updateOne({ _id: token}, { $set: { validUntil: calculateTokenValidTime() } });
        return existing.username;
    };

    this.getUser = async (token) => {
        let valid = await this.validateToken(token);
        if(valid.error){ return valid; }

        let user = await db.collection("Users").findOne({username: valid});
        if(!user){ return {error: "Something went wrong, user not found"}}
        return user;
    };

    this.getPreset = async (token, presetID) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        if(!user.presetIDs.map(pId => pId.toString()).includes(presetID.toString())){ return {error: "This user does not own this preset"}}

        let res = await db.collection("Presets").findOne({_id: presetID});
        if(!res){ return {error: "This preset does not exist"}}

        return res;
    };

    this.getPresets = async (token) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        return Promise.all(user.presetIDs.map(async presetID => await this.getPreset(token, presetID)));
    };

    this.addPreset = async (token, name) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        let res = await db.collection("Presets").insertOne({name: name, usernames: {}});
        if(!res){ return {error: "Something went wrong. Could not create preset"} }

        let res2 = await db.collection("Users").updateOne({username: user.username}, {$addToSet: {presetIDs: res.insertedId}});
        if(!res2){ return {error: "Something went wrong. Could not link preset to user"} }

        return {success: "Preset was created"}
    };

    this.editPreset = async (token, presetID, usernames) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        let existing = await this.getPreset(token, presetID);
        if(existing.error){ return existing; }

        let res = await db.collection("Presets").updateOne({_id: presetID}, {$set: {usernames: usernames}});
        if(!res){ return {error: "Something went wrong. Could not edit preset"} }

        return {success: "Preset was edited"}
    };

    this.removePreset = async (token, presetID) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        let existing = await this.getPreset(token, presetID);
        if(existing.error){ return existing; }

        let res = await db.collection("Presets").removeOne({_id: presetID});
        if(!res){ return {error: "Something went wrong. Could not remove preset"} }

        let res2 = await db.collection("Users").updateOne({username: user.username}, {$pull: {presetIDs: presetID}});
        if(!res2){ return {error: "Something went wrong. Could not unlink preset from user"} }

        return {success: "Preset was removed"}
    }
}

module.exports = { Database };