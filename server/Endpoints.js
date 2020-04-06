
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
            res.send({ error: "Something went wrong. Search was not logged"});
            return;
        }

        res.send({ success: "Search was logged" });
    };

    this.recentSearches = async (req, res) => {
        let vars = loadVariables(req, res, ["amount"]);
        if(!vars){ return; }

        res.send(await db.getRecentSearches(parseInt(vars.amount)));
    }
}

module.exports = { Endpoints };