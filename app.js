var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/home', function(req, res) {
    return res.sendFile(path.join(__dirname + '/views/index.html'));
   
});

app.get('/login', function(req, res) {
    return res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/test', function(req, res){
    return res.sendFile(path.join(__dirname + "/test.html"))
});


app.listen(3000, () => console.log('server is running'));
