var express = require('express');
var bodyParser = require('body-parser');
var ValidatorField = require('../.././validation/validation.js');
const mongoose = require('mongoose');
const config = require('../.././config/database.js');

mongoose.connect(config.database);
let db = mongoose.connection;
db.once('open',function(){
  console.log('connected to MongoDB');
});
db.on('error',function(err){
  console.log(err);
});

var app = express();

let LoginCredentials = require('../.././models/credentials.js');
app.use(function(req, res, next) {

 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.post('/login',function(req,res){
  console.log("Value returned by ValidateEmail is: ",ValidatorField.validateEmail(req.body.email));
    console.log("Value returned by ValidatePassword is: ",ValidatorField.validatePassword(req.body.password));
  if(ValidatorField.validateEmail(req.body.email)  && ValidatorField.validatePassword(req.body.password)){
    console.log(req.body);
LoginCredentials.find({email:req.body.email,password:req.body.password},function(err,credentials){
  if(err){
    console.log(err);
    res.err(500);
  }else{
    console.log('Successfully Login, retrieved from mongo as ',credentials);
    res.send("success");
  }
});
}
else{
  console.log("Invalid username/Password")
  res.err(500);
}
});

app.listen(3000,function(){
  console.log('The Login server is listening on port 3000 ...');
});
