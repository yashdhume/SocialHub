let express = require('express');
let app = express();

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/public/client.html');
});

app.get('/client.js', (request, response) => {
   response.sendFile(__dirname + '/client.js');
});

app.get('/styles.css', (request, response) => {
   response.sendFile(__dirname + '/styles/styles.css');
});

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' + app.get('port'));
});