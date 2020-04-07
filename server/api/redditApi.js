const fetch = require('node-fetch');

async function searchReddit(accountName) {
    let accountData = await (await fetch(`https://www.reddit.com/r/${accountName}.json`)).json();

    let posts = accountData.data.children.map(i => ({
        link: i.data.url,
        caption: i.data.title,
        timestamp: i.data.created_utc,
    }));

    return {
        accountInfo: {
            followersCount: accountData.data.children[0].data.subreddit_subscribers,
            userName: accountData.data.children[0].data.subreddit,
            profilePic: accountData.data.children[0].data.thumbnail,
        },
        posts: posts,
    };
}

module.exports = { searchReddit };