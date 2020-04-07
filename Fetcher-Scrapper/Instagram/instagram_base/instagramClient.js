const {searchInstagram} = require("../../../server/api/apis");

window.onload = function() {

   let accountName = 'KSI';
   console.log(searchInstagram(accountName));

};