const {searchInstagram} = require("./instagramApi");
const {searchReddit} = require("./redditApi");
const {searchYoutube} = require("./youtubeApi");

let sites = {
    "Reddit": searchReddit,
    "Instagram": searchInstagram,
    "Youtube": searchYoutube,
};

async function fullSearch(name){
    let fullData = {
        accountInfo: {},
        posts: [],
    };

    for(let key of Object.keys(sites)){
        let data = await sites[key](name);
        if(!data){ continue; }

        data.posts.forEach(i => { i.site = key });

        fullData.posts = fullData.posts.concat(data.posts);
        fullData.accountInfo[key] = data.accountInfo;
    }

    fullData.posts.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));

    return fullData;
}

module.exports = {fullSearch};