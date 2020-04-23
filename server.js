const express = require("express");
const fs = require("fs");
const path = require("path");

const db = require("./db/db.json")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    return res.json(db);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});