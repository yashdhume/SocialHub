const fetch = require('node-fetch');

async function searchInstagram(accountName) {
    let accountData = await (await fetch(`https://www.instagram.com/${accountName}/?__a=1`)).json();
    if(!accountData.graphql){ return null; }

    let posts = accountData.graphql.user.edge_owner_to_timeline_media.edges.map(i => ({
        image: i.node.display_url,
        caption: i.node.edge_media_to_caption.edges[0].node.text,
        timestamp: i.node.taken_at_timestamp,
    }));

    return {
        accountInfo: {
            followersCount: accountData.graphql.user.edge_followed_by.count,
            followingCount: accountData.graphql.user.edge_follow.count,
            profilePic: accountData.graphql.user.profile_pic_url_hd,
            isVerified: accountData.graphql.user.is_verified,
            userName: accountData.graphql.user.username,
        },
        posts: posts,
    };
}

module.exports = { searchInstagram };