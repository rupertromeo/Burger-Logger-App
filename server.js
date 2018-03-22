//Requirements
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();

// Serve Static content
app.use(express.static("public"));
// Parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse app/json
app.use(bodyParser.json());
// Require Handlebars
const exphbs = require("express-handlebars");
// Set view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Set the routes and give server access to them
const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function {
    console.log("Listening on port: %s", PORT);
});