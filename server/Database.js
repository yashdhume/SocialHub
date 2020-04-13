const bcrypt = require('bcrypt');
const { ObjectID } = require("mongodb");

function calculateTokenValidTime() {
    return new Date().getTime() + 1000 * 60 * 10; //10 minutes
}

function Database(db){

    this.logSearch = async (search) => {
        let res = await db.collection("Searches").insertOne({ search: search, timestamp: new Date().getTime() });
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
        let existing = await db.collection("Tokens").findOne({ _id: ObjectID(token) });
        if(!existing){ return {error: "Token does not exist"}; }
        if(new Date().getTime() > existing.validUntil){ return {error: "Token has expired"}; }
        await db.collection("Tokens").updateOne({ _id: ObjectID(token) }, { $set: { validUntil: calculateTokenValidTime() } });
        return existing.username;
    };

    this.getUser = async (token) => {
        let valid = await this.validateToken(token);
        if(valid.error){ return valid; }

        let user = await db.collection("Users").findOne({username: valid});
        if(!user){ return {error: "Something went wrong, user not found"}}
        return user;
    };

    this.addFavorite = async (token, favorite) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        let res = await db.collection("Users").updateOne({ username: user.username }, { $addToSet: { favorites: favorite }});
        if(!res){ return {error: "Something went wrong. Could not add favorite"} }
        return {success: "Favorite was added"}
    };

    this.removeFavorite = async (token, favorite) => {
        let user = await this.getUser(token);
        if(user.error){ return user; }

        let res = await db.collection("Users").updateOne({ username: user.username }, { $pull: { favorites: favorite }});
        if(!res){ return {error: "Something went wrong. Could not remove favorite"} }
        return {success: "Favorite was removed"}
    }
}

module.exports = { Database };