const express = require('express');
const fs = require('fs'); //might not need
const path = require('path');

var PORT = 8080;
var app = express();

var notes = [];

//these allow the Express app to handle data parsing for reading/adding new 'note' objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//i think this allows the express/server file to use all the files in the Develop/public folder
app.use(express.static(__dirname + '/Develop/public'));

//basic route for our home/default page, index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});
//when we navigate to /notes, we will display the notes.html page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(__dirname + "/Develop/db/db.json", function(err, data) {
        console.log(data)
        return res.json(data);
    })
});


//For Posting Notes
//================================================

//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

app.post("/api/notes", function(req, res) {

    var newNote = req.body;
    let database;

    fs.readFile(__dirname + "/Develop/db/db.json", function(err, data) {
        if (err) throw err;
        database = JSON.parse(data);
        database.push(newNote);
        let dataString = JSON.stringify(database);
        fs.writeFile(__dirname + "/Develop/db/db.json", dataString, function(error) {
            if (error) throw error;
        })

    })
    res.json(newNote)
})


// //creating new notes using JSON and body and all that stuff I don't really understand yet
// app.post("/api/notes", function(req, res) {


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