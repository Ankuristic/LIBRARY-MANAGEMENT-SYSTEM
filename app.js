const express = require("express");
const mysql= require("mysql");
const bodyParser = require("body-parser");
const controllers=require("./controllers/bookController")
const userController=require("./controllers/signup")
const loginController=require("./controllers/login")
// const issuebookController=require("./controllers/bookController")
const jwt = require("jsonwebtoken");
const bcrypt= require("bcryptjs");


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// const createToken =async() => {
//  const token  = await jwt.sign({_id:"123456789"},"mynameisankurshrivataytavbackenddeveloper");
//   console.log(token);
//   const userVer =await jwt.verify(token,"mynameisankurshrivataytavbackenddeveloper");
//   console.log("useVer");
// }
// createToken();


app.get('/book',controllers.findAll);
app.get('/lms_book_details/Pagination',controllers.findAllPagination);
// app.post('/user',controllers.storeUser);
app.post("/api/signup", function(req, res) {
  userController.signupuser(req, function(err, data){
      res.send(data);
  })
});
app.post("/api/login", function(req, res) {
  console.log("ankur")
  loginController.login(req, function(err, data){
      res.send(data);
  })
});

app.get('/api/getIssueBook',controllers.bookGetByStudent);
app.post('/api/lms_borrowed_book',controllers.getAllBorrowed);





// const createToken

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});