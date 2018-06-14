const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.listen(3000, function(){
console.log("Server Started at : 3000");
});