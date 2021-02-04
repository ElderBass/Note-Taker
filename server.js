//list all our dependencies for this bad boy
const express = require('express');
const fs = require('fs');
const path = require('path');

//set our server port to 8080
var PORT = 4000;
//set a var to the express method that we will need for certain functions
var app = express();

//these allow the Express app to handle data parsing for reading/adding new 'note' objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//i think this allows the express/server file to use all the files in the Develop/public folder
app.use(express.static(__dirname + '/Develop/public'));

//Routes 
//==========================

//basic route for our home/default page, index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});
//when we navigate to /notes, we will display the notes.html page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});
//route to the API we are creating (held in the file db.json) consisting of the notes we write
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/db/db.json"));
});


//For Posting Notes
//================================================

app.post("/api/notes", function(req, res) {
    //set a var to the body item in the 'request' object
    var newNote = req.body;
    //read the database file 
    fs.readFile(__dirname + "/Develop/db/db.json", 'utf8', function(err, data) {
        if (err) throw err;

        let db = [].concat(JSON.parse(data));
        newNote.id = db.length + 1;

        db.push(newNote)

        fs.writeFile(__dirname + "/Develop/db/db.json", JSON.stringify(db), function(error) {
            if (error) throw error
        })
    })

    // res.send(newNote);
    res.json(newNote);
})

app.delete("/api/notes/:id", function(req, res) {

    const note = req.params

    fs.readFile(__dirname + "/Develop/db/db.json", 'utf8', function(err, data) {
            if (err) throw err;
            //console.log('Data before removal: ' + JSON.parse(data));

            let deleted;
            let parsed = JSON.parse(data);

            console.log('parsed data = ' + parsed)

            for (let i = 0; i < parsed.length; i++) {

                if (note.id == parsed[i].id) {
                    console.log('we made it inside boys')
                    deleted = parsed.splice(i, 1);
                    console.log('After removal: ' + parsed)
                    fs.writeFile(__dirname + "/Develop/db/db.json", JSON.stringify(parsed), function(error) {
                        if (error) throw error
                    })
                }
            }
        })
        //do I even need this?
    res.send(note);
})

//start running the server so we can access all this stuff
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
});