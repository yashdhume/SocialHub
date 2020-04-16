var Twitter = require('twitter');
var config = require("../configuration.js");
var twitter = new Twitter(config);

async function searchTwitter(accountName){
	twitter.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${accountName}`, function(err, data, response) {

	    if(!err){
	    	let posts = data.map(d => ({
	    		link: d.entities.urls !== undefined && d.entities.urls.length !==0 ? d.entities.urls[0].url : "No Link",
	    		image: d.entities.media !== undefined ? d.entities.media[0].media_url : "No Image",
	    		caption: d.text,
	    		timestamp: d.created_at
	    	}))

	    	let accountDetails = {
	    		followersCount: data[0].user.followers_count,
	    		followingCount: data[0].user.friends_count,
	    		profilePic: data[0].user.profile_image_url,
	    		isVerified: data[0].user.verified,
	    		userName: data[0].user.name,
	    	}

	    	let returnData = {
	    		accountInfo: {
		    		followersCount: data[0].user.followers_count,
		    		followingCount: data[0].user.friends_count,
		    		profilePic: data[0].user.profile_image_url,
		    		isVerified: data[0].user.verified,
		    		userName: data[0].user.name,
	    		},

	    		posts: posts
	    	}
	    	//console.log(returnData)
	    	return(returnData)


	    }
	    else {
	    	console.log(err);
	    }

	});
}

//console.log(searchTwitter("KSIOlajidebt"))

module.exports = { searchTwitter };