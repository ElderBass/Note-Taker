# Note- Taker App 

A node.js/express application for writing and saving personal notes, created by Seth Zygarlicke.

Links
------------
GitHub Repository: https://github.com/ElderBass/Note-Taker.git

Heroku Deployed: https://fierce-plateau-69624.herokuapp.com/notes


    
## Table of Contents

* [Description](#description)
    
* [Installation](#installation)

* [Technologies](#technologies)

* [Questions](#questions)


## Description

This is an application for taking personal notes, saving them to the page, and retrieving or deleting them at the user's leisure. Utilizing a local server created with express, the client makes queries to create a new note, with a title and subsequent text, by making a 'POST' query to the server. The server then takes in the request and adds the new note to its database. Once done, the server then sends the note back as a response to the client for further manipulation by javascript functions.

When starting the application, the user is directed to the 'home' page, with a 'Note-Taker' title and a button labeled 'Get Started'. Upon clicking this button, the user is redirected to the note-taking page. A button in the upper right corner, in the style of a pencil icon, will allow the user to write a new note. The user enters the title and text of the note, at which time a 'save' icon button appears next to the pencil icon. Clicking the save icon will store the note in the database, and display the title of the note in a list on the left side of the page.

The user can add as many notes as the wish. They can also click on the notes in the list to have them displayed in the main area. Alongside the title of the notes in the note list rests a red trash can icon which acts as a 'delete' button. Clicking this button sends a 'DELETE' request to the server, and results in that specific note being removed from both list on the left and the database file itself.  

    
## Installation

    
Dependencies used in this application include 'express' for server creation and usage and 'nodemon' which should be saved as a dev dependency.

To install express, type this command in your terminal:
```
npm i express
```
To install nodemon as a dev dependency, run this command:
```
npm i --save-dev nodemon
```
For maximum ease of use, we recommend accessing your package.json file and within the "scripts" object, add the key "watch": with the value "nodemon server.js"

To run this application from the terminal, simply enter the following command:
```
node server.js
```
However, we __highly__ recommend instead running it with nodemon activated. To do this, instead enter the command:
```
npm run watch
```
    
    
## Technologies

The backend of this application relied heavily on three main technologies: node.js, express, and javascript with JQuery. Node.js was used in conjunction with express to establish the server(the server.js file) and create the server-side functionality, written in javascript. JQuery was used in the script.js file to create queries from the client to the server. JQuery and javascript also encoded all of the client-side functions within the script.js file. 
    
The application is deployed on Heroku and the code was compiled in VS Code.

    
## Questions

    
See more projects by Seth on GitHub:  https://github.com/ElderBass

   
For any questions, please email Seth at:

    zygster11@gmail.com
