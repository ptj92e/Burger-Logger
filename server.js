let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./app/routes/api-routes.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});