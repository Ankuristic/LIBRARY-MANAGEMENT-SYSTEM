const express = require("express");
const mysql= require("mysql");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

const routes = require('./Routes/routes');
app.use('/', routes);


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});