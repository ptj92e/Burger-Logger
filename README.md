# Burger-Logger

The Burger Logger is an application that a user can submit the name of a burger and puts it in a list that shows burgers that have not been eaten. Once you have eaten that dream burger, you can click the devour button and that moves the burger to a list of burgers that have been eaten. 

If you would like to check out this app, please use the following link: https://immense-shelf-89251.herokuapp.com/

If you would like to check out this app locally from Github, please checkout the config.json file and input your mySQL information into the "development" section.

## Technology

This app uses an Express server, a mySQL database, Sequelize, jQuery, and Express-Handlebars to create a full-stack application. 

## Front End

On the front end, I used jQuery to get the main functionality of the app to work. I added ajax calls on each click event to tell the server how to manipulate the database and create or update information in the mySQL database. 

For the looks of the app, I used Express-Handlebars to create a more responsive experience for the user. The Handlebars loop over the information received from the database and populates information based off whether or not the burger was eaten.

## Back End

When the server receives information from the ajax calls, that information is sent to api-routes that determine what to do with the database. There are get, post, and put calls that retrieve, create, or update information. These calls utilize Sequelize to replace an orm to manipulate this information. 

Once sequelize receives the ajax call, the information is sent back to the database and then the server is called to run the program. The database syncs before the server is stood up so the server does not run and miss information that may not have been updated yet. 

## Heroku

The last thing about this app is the functionality on Heroku. I had to link my app to a Heroku database called JAWS_DB and this allows for anyone to use the app. That is where the config.json comes into play. That file determines who the host of the application is. If the app is local, it uses either the test or the development section. If the host is on Heroku, the app uses the production section. 