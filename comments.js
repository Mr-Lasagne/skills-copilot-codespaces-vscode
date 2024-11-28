// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/comments', upload.single('file'), function(req, res) {
    fs.readFile(req.file.path, 'utf8', function(err, data) {
        parser.parseString(data, function(err, result) {
            if (err) {
                console.error('Error parsing XML file: ' + err);
                res.status(500).send('Error parsing XML file');
            } else {
                console.log('XML file parsed successfully');
                res.status(200).send('XML file parsed successfully');
            }
        });
    });
});

app.get('/comments', function(req, res) {
    request('http://localhost:3000/comments', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        } else {
            res.send('Error retrieving comments');
        }
    });
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
