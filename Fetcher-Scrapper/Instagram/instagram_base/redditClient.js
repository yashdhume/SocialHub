window.onload = function() {

   let accountName = 'KSI';
   fetch(`https://www.reddit.com/r/${accountName}.json`)
      .then((response) => response.json())
      .then((accountData) => {
         //console.log(accountData);
         let userName = accountData.data.children[0].data.subreddit;
         let profilePic = accountData.data.children[0].data.thumbnail;
         let followersCount = accountData.data.children[0].data.subreddit_subscribers;

         //generate new parsed JSON
         let text =  '{' +
                     `"userName": "${userName}", ` +
                     `"followersCount": "${followersCount}", ` +
                     `"profilePic": "${profilePic}", ` +
                     `"postLinks": [`;

         for (let i = 0; i < accountData.data.children.length; i++){
            text += `"${accountData.data.children[i].data.url}"`
            if (i < accountData.data.children.length - 1){
               text += ', '
            }
            //console.log(accountData.data.children[i].data.title);
            //console.log(accountData.data.children[i].data.url);
         }
         text += '], ';
         
         text += `"postCaptions": [`;
         for (let i = 0; i < accountData.data.children.length; i++){
            let caption = accountData.data.children[i].data.title;
            let captionParsed = JSON.stringify(caption);
            text += `${captionParsed}`;
            if (i < accountData.data.children.length - 1){
               text += ', '
            } 
         }
         text += ']}';

         //console.log(text);
         let toJsonData = JSON.parse(text);
         console.log(toJsonData);
      });

}