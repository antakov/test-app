const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const compression = require("compression");
const path = require('path');

//Express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(pino);
app.use(cors());
app.disable('etag');
app.use(express.static(__dirname + './../public/app'));

app.use(compression())

const data = [
  {
    question: "Do you like React? ",
    yes: "Good choice!",
    no: "Damn!"
  }
];

app.all('*', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader('Content-Type', 'application/json');
  
  next();
});

app.get('/', function(req, res){
  res.status(200).JSONsendFile(path.resolve('public'))
});

app.get('/api/questions', (req, res) => {
    res.status(200).send(JSON.stringify(data))
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);