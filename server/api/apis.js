const {searchInstagram} = require("./instagramApi");
const {searchReddit} = require("./redditApi");
const {searchYoutube} = require("./youtubeApi");
const {searchTwitter} = require("./twitterApi");

let sites = {
    "Reddit": searchReddit,
    "Instagram": searchInstagram,
    "Youtube": searchYoutube,
	"Twitter": searchTwitter,
};

async function search(usernames){
    let fullData = {
        accountInfo: {},
        posts: [],
    };

    for(let key of Object.keys(sites)){
        let name = usernames[key];
        if(!name){ continue; }
        let data = await sites[key](name);
        if(!data){ continue; }

        data.posts.forEach(i => { i.site = key });

        fullData.posts = fullData.posts.concat(data.posts);
        fullData.accountInfo[key] = data.accountInfo;
    }

    fullData.posts = fullData.posts.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));

    return fullData;
}

async function fullSearch(name){
    let usernames = {};
    for(let key of Object.keys(sites)) {
        usernames[key] = name;
    }
    return await search(usernames);
}

module.exports = {fullSearch, search};