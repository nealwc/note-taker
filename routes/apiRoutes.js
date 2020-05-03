const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid").v4;

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(db);
    });

    app.post("/api/notes", function (req, res) {
        let newNote =
        {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };

        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            let notesData = JSON.parse(data);
            notesData.push(newNote);

            fs.writeFile("./db/db.json", JSON.stringify(notesData), function (err) {
                if (err) throw err;
                return res.json(db);
            });
        });
    });

    app.delete("api/notes:id", function (req, res) {
        let chosenId = req.params.id;
        console.log(chosenId);

    });
};