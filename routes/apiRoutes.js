const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(db);
    });

    // app.post("api/notes", function (req, res) {
    //     var newNote = req.body;

    //     saveNote(newNote)

    //     db.push(newNote);

    //     res.json(newNote);
    // });

    // app.delete("api/notes", function (req, res) {


    // });
}