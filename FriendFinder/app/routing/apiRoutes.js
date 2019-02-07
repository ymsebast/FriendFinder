// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
//data
var friends = require("../data/friends");

app.use(express.urlencoded({ extended: true }));
// API ROUTES

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});
app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});


module.exports = app;
