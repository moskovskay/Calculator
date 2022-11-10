const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res) {
  var num11 = Number(req.body.num1);
  var num22 = Number(req.body.num2);
  res.send("Calculation result is: " + calc(num11, num22));
});

function calc(num1, num2) {
  return num1 + num2 ;
}

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  var wei = Number(req.body.weight);
  var hei = Number(req.body.height);
  res.send("Your bmi is: "+ Math.floor(bmi(wei, hei)));
});

function bmi(weight, height) {
  return weight/Math.pow(height, 2);
}

app.listen(3000, function(){
  console.log("Started on port 3000");
});
