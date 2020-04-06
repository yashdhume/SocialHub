
function Database(db){

    this.logSearch = async (search) => {
        let res = await db.collection("Searches").insertOne({ search: search, timestamp: new Date().getTime() });
        return res.result.ok === 1;
    };

    this.getRecentSearches = async (searchCount) => {
        return Array.from(await db.collection("Searches").find().sort({ timestamp: -1 }).limit(searchCount).toArray());
    }
}

module.exports = { Database };