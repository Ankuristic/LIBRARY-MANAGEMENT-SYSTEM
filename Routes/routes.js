var express=require('express');
var routes= express.Router();
var controllers=require('../controllers/bookController');



// book routes

routes.get('/book',controllers.bookControllers.findAll);
routes.get('/book/Pagination',controllers.bookControllers.findAllPagination);
