
/* packages for the server */
var express = require('express');
var app = express();
var http = require('http').Server(app);

/* tells express server to allow public files to be hosted
in the www folder */
app.use(express.static(__dirname + '/www'));

/* start server */
var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
});


/* Express Routes -
This finds the path of your file and sends back
the test.html file to your client when the
route is hit. */
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
});
