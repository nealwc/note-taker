const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid").v4;

module.exports = function (app) {
    // function to retrieve the note data from the db.json file
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            let notesArr = JSON.parse(data);
            res.json(notesArr);
        });
    });

    // function to post new note data to the db.json file
    app.post("/api/notes", function (req, res) {
        let newNote =
        {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };

        // retrieves the data from the db.json, parses the data and adds the new note
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            let notesArr = JSON.parse(data);
            notesArr.push(newNote);

            // turns the new notes data into strings for JSON and writes it to the db.json file
            fs.writeFile("./db/db.json", JSON.stringify(notesArr), function (err) {
                if (err) throw err;
                res.json(db);
            });
        });
    });

    // function to delete a note from the db.json file
    app.delete("/api/notes/:id", function (req, res) {
        let chosenId = req.params.id;
        console.log(chosenId);

        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            let notesArr = JSON.parse(data);
            let newNotesArr = notesArr.filter(note => note.id != chosenId);

            fs.writeFile("./db/db.json", JSON.stringify(newNotesArr), function (err) {
                if (err) throw err;
                res.json(db);
            });
        });
    });
};