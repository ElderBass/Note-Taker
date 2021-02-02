const express = require('express');
const fs = require('fs'); //might not need
const path = require('path');

var PORT = 8080;
var app = express();

var notes = [];

//these allow the Express app to handle data parsing for reading/adding new 'note' objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//basic route for our home/default page, index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
//when we navigate to /notes, we will display the notes.html page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile("../Develop/db/db.json", function(err, data) {
        return res.json(notes);
    })
});

//For Posting Notes
//================================================

// //creating new notes using JSON and body and all that stuff I don't really understand yet
// app.post("/api/notes", function(req, res) {

//     var newNote = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newNote);

//     notes.push(newNote);

//     res.json(newNote);
// });

//start running the server so we can access all this stuff
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
});