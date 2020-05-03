const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

// const db = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// API routes:
require("./routes/apiRoutes")(app);

// html routes:
require("./routes/htmlRoutes")(app);

// start server:
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});