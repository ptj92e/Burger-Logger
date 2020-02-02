let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./app/routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});