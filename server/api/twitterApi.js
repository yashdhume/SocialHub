let Twitter = require('twitter');
let config = require("../configuration.js");
let twitter = new Twitter(config.twitterKey);

async function searchTwitter(accountName) {
	let data = await twitter.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${accountName}`, {});

	let posts = data.map(d => ({
		link: d.entities.urls !== undefined && d.entities.urls.length !== 0 ? d.entities.urls[0].url : "No Link",
		image: d.entities.media !== undefined ? d.entities.media[0].media_url : "No Image",
		caption: d.text,
		timestamp: Date.parse(d.created_at),
	}));

	let accountInfo = {
		followersCount: data[0].user.followers_count,
		followingCount: data[0].user.friends_count,
		profilePic: data[0].user.profile_image_url,
		isVerified: data[0].user.verified,
		userName: data[0].user.name,
	};

	return {
		posts: posts,
		accountInfo: accountInfo,
	}
}

module.exports = { searchTwitter };