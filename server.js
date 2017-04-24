var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var mugiwara = [
  "Luffy",
  "Sanji",
  "Nami",
  "Zoro"
];

var todoThings = [
  {
    id: "2345123lk",
    title: "become the pirate king"
  },
  {
    id: "2345124lk",
    title: "feed Chopper"
  }
];

app.get('/mugiwara', function(req, res) {
  res.send(mugiwara);
});

app.get('/todo', function(req, res) {
  res.send(todoThings);
});

app.listen(6060);
