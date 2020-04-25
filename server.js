var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
//process.env.PORT finds any open server when you deploy to heroku or another host site
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);

});