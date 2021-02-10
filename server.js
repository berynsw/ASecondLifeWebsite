//import node file system and express packages
var fs = require('fs');
var express = require('express');
var app = express();


//starts the server on port 80 (default port)
app.listen(80, function() {
    console.log("Express server listening on port %d", 80);
});


//sends index.html to client by default
app.use(express.static('public'));



// send json data to client if the client submits a request
app.use(express.json());
app.get('/data.json', (req, res) => {
    fs.readFile(__dirname+'/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.json(obj)
    });
});

