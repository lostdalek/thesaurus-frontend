var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

/*app.get('*', function(req, res) {
    if (req.url.slice(-3) === "css") {
        res.type("css");
        res.sendFile(path.join(__dirname, '../dist', 'main.css'));
    } else {
        res.sendFile(path.join(__dirname, '../src', 'index-prod.html'));
    }
});*/

app.use('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src', 'index-prod.html'))
});

app.listen(port, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
