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
    // console.log(newFriend);
    var temptotal = 100;
    var tempFriend;
    //compare scores
    for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
            var diff = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            // console.log(diff)
            friends[i].totalDiff += diff;
        }
        //get friend with least difference
        if (friends[i].totalDiff < temptotal) {
            temptotal = friends[i].totalDiff;
            tempFriend = friends[i];
        }
    }
    //add new user to data
    friends.push(newFriend);
    console.log(tempFriend);
    res.json(tempFriend);
});


module.exports = app;
