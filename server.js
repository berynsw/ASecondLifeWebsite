var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const fs = require('fs');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(express.json());

var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started '+ port);


function getDatasetJson() {
    var rawdata = fs.readFileSync("./src/assets/upcycleData.json");
    var data = JSON.parse(rawdata);
    return data.upcycles;
}

/* GET data file */
app.get('/upcycles', function(req, resp, next) {
    var data = getDatasetJson();
    resp.json(data);
});