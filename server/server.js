const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('hello world, jolly pokedex');
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on http://localhost:'.concat(app.get('port')));
});
