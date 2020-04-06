let express = require('express');
let app = express();

app.get('/instagram', (request, response) => {
	response.sendFile(__dirname + '/public/instagramClient.html');
});

app.get('/reddit', (request, response) => {
	response.sendFile(__dirname + '/public/redditClient.html');
});

app.get('/youtube', (request, response) => {
	response.sendFile(__dirname + '/public/youtubeClient.html');
});

app.get('/instagramClient.js', (request, response) => {
   response.sendFile(__dirname + '/instagramClient.js');
});

app.get('/redditClient.js', (request, response) => {
   response.sendFile(__dirname + '/redditClient.js');
});

app.get('/youtubeClient.js', (request, response) => {
   response.sendFile(__dirname + '/youtubeClient.js');
});

app.get('/styles.css', (request, response) => {
   response.sendFile(__dirname + '/styles/styles.css');
});

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' + app.get('port'));
});