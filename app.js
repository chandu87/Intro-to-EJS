const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
});
app.get("/lovewith/:name", function(req, res){
    const loveWithName = req.params.name;
    res.render("love", {loves : loveWithName});
});
app.get("/posts", function(req, res){
    const postData = [
                        {title : "Premadesham", hero : "abbas"},
                        {title : "Nani", hero : "Mahesh Babu"},
                        {title: "Ganatha Garage", hero :"NTR"}
                    ];
    res.render("posts", {posts : postData});
});
app.listen(3000, function(){
console.log("Server Started at : 3000");
});