const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});
app.get("/lovewith/:name", function(req, res){
    var loveWithName = req.params.name;
    res.render("love.ejs", {loves : loveWithName});
});

app.listen(3000, function(){
console.log("Server Started at : 3000");
});