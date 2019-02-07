// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
// HTML ROUTES

app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('home.html', { root: "./app/public/"});
});

app.get("/survey", function (req, res) {
    res.sendFile('survey.html', { root: "./app/public/"});
});

module.exports = app;