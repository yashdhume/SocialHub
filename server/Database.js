
function Database(db){

    this.logSearch = async (search) => {
        let res = await db.collection("Searches").insertOne({ search: search, timestamp: new Date().getTime() });
        return res.result.ok === 1;
    };

    this.getRecentSearches = async (searchCount) => {
        return Array.from(await db.collection("Searches").find().sort({ timestamp: -1 }).limit(searchCount).toArray());
    };

    this.createUser = async (username) => {
        let res = await db.collection("Users").insertOne({ username: username, favorites: []});
        return res.result.ok === 1;
    };

    this.getUser = async (username) => {
        return await db.collection("Users").findOne({ username: username })
    };

    this.addFavorite = async (username, favorite) => {
        let res = await db.collection("Users").updateOne({ username: username }, { $addToSet: { favorites: favorite }});
        return res.result.ok === 1;
    };

    this.removeFavorite = async (username, favorite) => {
        let res = await db.collection("Users").updateOne({ username: username }, { $pull: { favorites: favorite }});
        return res.result.ok === 1;
    }
}

module.exports = { Database };