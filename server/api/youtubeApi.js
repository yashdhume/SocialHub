const fetch = require('node-fetch');
const {youtubeKey} = require("../configuration");

async function searchYoutube(accountName){
    let getAccount= await (await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${accountName}&key=${youtubeKey}`)).json();
    let accountId= getAccount.items[0].id;
    let postData = await (await fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${accountId}&maxResults=25&key=${youtubeKey}`)).json();
    let accountData=await (await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${accountId}&key=${youtubeKey}`)).json();
    if(!postData&&!accountData){ return null; }
    let posts = postData.items.map(i => ({
        link: `http://youtube.com/watch?v=${i.id.videoId}`,
        image: i.snippet.thumbnails.high.url,
        caption: i.snippet.description,
        timestamp: Date.parse(i.snippet.publishedAt) ,
    }));
     return {
        accountInfo: {
            followersCount: parseInt(accountData.items[0].statistics.subscriberCount),
            userName: accountData.items[0].snippet.localized.title,
            profilePic: accountData.items[0].snippet.thumbnails.high.url,
        },
        posts: posts,
    };

}
module.exports = { searchYoutube };