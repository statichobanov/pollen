const express = require('express');
const http = require('http');
const path = require('path');
const server = require('./config/server');
const controllers = require('./controllers/index');
const app = express();
//const favicon = require('serve-favicon');

server(app);

app.set('views', `${__dirname}/views`);
//app.use(favicon(path.join(__dirname, 'public', 'panaceya-fav-icon.png')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controllers.main);

http.createServer(app).listen(app.get('port'), () => {
    console.log('\n' + `Server listening on port ${app.get('port')}`);
});
