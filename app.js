const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
});
app.get("/lovewith/:name", function(req, res){
    var loveWithName = req.params.name;
    res.render("love.ejs", {loves : loveWithName});
});
app.get("/posts", function(req, res){
    const postData = [
                        {title : "Premadesham", hero : "abbas"},
                        {title : "Nani", hero : "Mahesh Babu"},
                        {title: "Ganatha Garage", hero :"NTR"}
                    ];
    res.render("posts.ejs", {posts : postData});
});
app.listen(3000, function(){
console.log("Server Started at : 3000");
});