
var express = require('express'), 
app = express(), 
port = 3000;

mongoose = require('mongoose'),
Surveys = require('./api/models/surveyModel'), //created model loading here
bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Surveydb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/surveyRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);