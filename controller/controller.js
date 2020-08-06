//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/search", function(req, res){
	console.log(req.body);
});

app.listen(3030, function() {
  console.log("Server started on port 3030");
});
