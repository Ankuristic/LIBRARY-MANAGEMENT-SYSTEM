const express=require('express');
const routes= express.Router();
// router=express.Router();
const controllers=require('../controllers/bookController');
const controllers= require('/controllers/userControllers')



// book routes

app.get('/lms_book_details',controllers.findAll);
app.get('/lms_book_details/Pagination',controllers.findAllPagination);
app.post('/user',controllers.storeUser);
app.post("/signup",controller.signupuser)



module.export= routes;