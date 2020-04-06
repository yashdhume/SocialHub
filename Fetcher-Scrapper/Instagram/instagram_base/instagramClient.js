window.onload = function() {

   let accountName = 'KSI';
   fetch(`https://www.instagram.com/${accountName}/?__a=1`)
      .then((response) => response.json())
      .then((accountData) => {
         //console.log(accountData);
         let userName = accountData.graphql.user.username;
         let followersCount = accountData.graphql.user.edge_followed_by.count;
         let followingCount = accountData.graphql.user.edge_follow.count;
         let profilePic = accountData.graphql.user.profile_pic_url_hd;
         let isVerified = accountData.graphql.user.is_verified;
         //console.log(profilePic);

         //generate new parsed JSON
         let text =  '{' +
                     `"userName": "${userName}", ` + 
                     `"followersCount": "${followersCount}", ` +
                     `"followingCount": "${followingCount}", ` +
                     `"profilePic": "${profilePic}", ` +
                     `"isVerified": ${isVerified}, ` +
                     `"postLinks": [`;

         //console.log(accountData.graphql.user.edge_owner_to_timeline_media.edges);
         for (let i = 0; i < accountData.graphql.user.edge_owner_to_timeline_media.edges.length; i ++){
            text += `"${accountData.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url}"`;
            if (i < accountData.graphql.user.edge_owner_to_timeline_media.edges.length - 1){
               text += ', '
            }
            //console.log(accountData.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url);
           // console.log(accountData.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text);
         }
         text += '], ';

         text += `"postCaptions": [`;
         for (let i = 0; i < accountData.graphql.user.edge_owner_to_timeline_media.edges.length; i ++){
            let caption = accountData.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text;
            let captionParsed = JSON.stringify(caption);
            text += `${captionParsed}`;
            if (i < accountData.graphql.user.edge_owner_to_timeline_media.edges.length - 1){
               text += ', '
            }
         }
         text += ']}';

         //console.log(text);
         let toJsonData = JSON.parse(text);
         console.log(toJsonData);
      });

}