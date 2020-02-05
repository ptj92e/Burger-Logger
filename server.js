//These lines are requiring all of the modules needed to run the server
let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");
let db = require("./app/models");
//This is allowing the app to manipulate json objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//This is allowing the app to use the index.js and style.css within the public directory
app.use(express.static("app/public"));
//This is setting the view engine for handlebars as the main.handlebars file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//This is allowing the server to use the api routes established
require("./app/routes/api-routes.js")(app);

//This is syncing up the database with the server so that the server does not run before the database has been updated
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});